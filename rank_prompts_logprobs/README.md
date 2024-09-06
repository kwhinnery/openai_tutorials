# Rank Prompts with Logprobs

This example shows how to rank different prompts using
[log probabilities](https://cookbook.openai.com/examples/using_logprobs). The
parameters used in this example
[are in the API reference here](https://platform.openai.com/docs/api-reference/chat/create#chat-create-logprobs).

## Running this example

This example requires an OpenAI API key. You can get one
[here](https://platform.openai.com/api-keys). Export it as an environment
variable with the following command on \*nix systems:

```bash
export OPENAI_API_KEY=<your key>
```

This example code is written in TypeScript for the [Deno](https://deno.com/)
runtime, using the official
[OpenAI SDK for JavaScript](https://github.com/openai/openai-node). The same
code should also run in Node.js environments without significant modifications.
Execute the code with the following command:

```bash
deno run -A logprobs.ts
```

This will generate text for three different prompts, and use logprobs to compute
the [perplexity](https://guides.library.unlv.edu/c.php?g=1361336&p=10054021) of
each. A higher perplexity value indicates that the model is less confident in
the correctness of the generated text for a given prompt. The prompt with the
lowest perplexity value might be considered the best prompt for generating text
in the given context.
