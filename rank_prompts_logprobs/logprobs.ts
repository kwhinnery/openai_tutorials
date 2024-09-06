import { OpenAI } from "openai";
import * as tf from "@tensorflow/tfjs";

// The prompts we want to evaluate for perplexity
const PROMPTS = [
  "What is Jay-Z's best album?",
  "What is Jay-Z's most creative album?",
  "What is Jay-Z's highest-selling album ever?",
];

// Create a new OpenAI client - assumes OPENAI_API_KEY is exported in the
// system environment
const openai = new OpenAI();

// Make an async OpenAI API call for each prompt
const results = await Promise.all(PROMPTS.map(async (prompt, index) => {
  // Get a text completion with logprobs
  const completion = await openai.chat.completions.create({
    messages: [{
      role: "user",
      content: `Respond with a single complete sentence. ${prompt}`,
    }],
    model: "gpt-4o",
    logprobs: true,
  });

  // Extract the logprobs from the completion
  const logprobs = completion.choices[0].logprobs?.content?.map((logprob) =>
    logprob.logprob
  );

  // Convert the logprobs to a tensor
  const logprobsTensor = tf.tensor1d(logprobs ?? []);
  const mean = tf.mean(logprobsTensor);

  // Calculate the perplexity
  const perplexity = tf.exp(tf.neg(mean));

  return `Prompt ${index}:\n"${
    completion.choices[0].message.content
  }"\nPerplexity: ${perplexity}\n`;
}));

results.forEach((result) => console.log(result));
