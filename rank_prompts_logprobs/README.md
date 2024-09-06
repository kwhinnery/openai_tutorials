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

## Example output

The test run below shows that the third prompt, the most specific one which
references album sales instead of subjective factors, has the lowest perplexity.

```
Prompt 0:
"Many critics and fans consider Jay-Z's 2001 album "The Blueprint" to be his best work."
Perplexity: Tensor
    1.3006447553634644

Prompt 1:
"Many fans and critics consider Jay-Z's 2001 album "The Blueprint" to be his most creative work, showcasing his lyrical prowess and influential production."
Perplexity: Tensor
    1.5504449605941772

Prompt 2:
"Jay-Z's highest-selling album ever is "Vol. 2... Hard Knock Life," which was released in 1998 and has sold over 5 million copies in the United States."
Perplexity: Tensor
    1.170264482498169
```
