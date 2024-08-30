import { encodeBase64 } from "@std/encoding/base64";
import { z } from "zod";
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";

// Initialize OpenAI client - assumes OPENAI_API_KEY is exported as
// an environment variable
const openai = new OpenAI();

// Read the image file
const imageFile = await Deno.readFile("receipt.jpg");
const base64Image = encodeBase64(imageFile);

// Prepare the base64 encoded image URL
const imageUrl = `data:image/jpeg;base64,${base64Image}`;

// Define the schema for the output we want from the LLM using Zod
const ReceiptSchema = z.object({
  vendor: z.string(),
  total: z.number(),
  date: z.string(),
});

// Generate a response from the OpenAI API
const response = await openai.chat.completions.create({
  model: "gpt-4o-2024-08-06",
  messages: [
    {
      role: "system",
      content: "Parse data from a receipt image and output JSON data.",
    },
    {
      role: "user",
      content: [{ type: "image_url", image_url: { "url": imageUrl } }],
    },
  ],
  response_format: zodResponseFormat(ReceiptSchema, "receipt"),
});

// Log the response
const data = JSON.parse(response.choices[0]?.message?.content || "{}");
console.log(data);
