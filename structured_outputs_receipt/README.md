# Use Structured Outputs to Parse Receipts

This example shows how to use multimodal inputs (text and image) along with
structured outputs to parse receipts. Official docs for
[structured outputs can be found here](https://platform.openai.com/docs/guides/structured-outputs).

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
deno run -A structured_outputs.ts
```

This will upload the receipt found in this folder as `receipt.jpg` and print
JSON conforming to an explicit schema to standard output.
