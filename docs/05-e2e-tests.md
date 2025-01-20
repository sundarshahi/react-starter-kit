# E2E

## Setup

In this project for E2E testing you can use the following frameworks:
[Playwright](https://playwright.dev/).

*For using Playwright:*
```shell
cd e2e
pnpm install
cd ..
cp .env.dist .env
cp .env.e2e.dist ./e2e/.env
```

## Details & Reasoning

The configuration is mostly isolated to the e2e folder, to allow for easy removal when not needed
and to avoid conflicts with any other testing libraries, as they tend to pollute the global namespace. We believe that
proper e2e testing is extremely valuable, but we also recognize that it's not for everyone and it will probably be one
of the most removed or ignored features in the boilerplate versions.


To get rid of e2e testing simply delete the e2e directory, the e2e.dist env file, anything beginning
with "e2e" from package.json's scripts field and the step named "e2e" from the bitbucket pipelines configuration.
