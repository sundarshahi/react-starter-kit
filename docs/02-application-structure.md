# Application structure

## Root directory structure

`├──`[`.changeset`](../.changeset) — data about changesets <br>
`├──`[`.github`](../.github) — GitHub configuration including CI/CD workflows <br>
`├──`[`.husky`](../.husky) — Husky scripts for git hooks <br>
`├──`[`docker`](../docker) — Docker related files<br>
`├──`[`docs`](../docs) — Application documentation files <br>
`├──`[`e2e`](../e2e) — Playwright E2E tests project <br>
`├──`[`plop-templates`](../plop-templates) — Templates for plop commands <br>
`├──`[`public`](../public) — React application public files <br>
`├──`[`scripts`](../scripts) — Custom scripts (ex. fetching translations) <br>
`├──`[`src`](../src) —Application source code <br>

## Source code structure

`├──`[`src`](../src) —Application source code <br>
`├──`[`app`](../src/app) — Routes, react specific and library's core entrypoint for app.
`├──`[`context`](../src/app/context) - Global contexts using across React application. Each context has its context and controller files <br>
`├──`[`hooks`](../src/app/hooks) - Global hooks used across the application. The best approach is to keep flat structure of hooks in this directory <br>
`├──`[`providers`](../src/app/providers) - Configuration of providers tree in React application <br>
`├──`[`components`](../src/app/components) - Keep Application's Components (except base ui) in this directory <br>
`├──`[`services`](../src/services) — Configuration of API client and collection of API actions (queries and mutations) definition. and any other service layer logic <br>
`├──`[`react-query`](../src/react-query) — Setup and config for react-query<br>
`├──`[`assets`](../src/assets) - React application public assets (images, icons, custom fonts etc.) <br>
`├──`[`i18n`](../src/i18n) - Configuration of internationalization module in SPA application. It also contains JSON files with application translations <br>
`├──`[`tests`](../src/tests) - Configuration of React application unit tests <br>
`├──`[`types`](../src/types) - Global types used across the application <br>
`├──`[`design-system`](../src/design-system/) - Base UI components used across the application. The best approach is to keep flat structure of UI components in this directory <br>
`├──`[`lib`](src/lib) - Base utility functions used across the application. <br>
`├──`[`instrumentation`](src/instrumentation) - Utility and functions for error and logging <br>