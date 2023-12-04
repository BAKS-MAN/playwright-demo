# Playwright demo project for UI testing

## [Documentation](https://playwright.dev)

Playwright is a framework for Web Testing and Automation. It allows
testing [Chromium](https://www.chromium.org/Home), [Firefox](https://www.mozilla.org/en-US/firefox/new/)
and [WebKit](https://webkit.org/) with a single API. Playwright is built to enable cross-browser web
automation that is **ever-green**, **capable**, **reliable** and **fast**.

## Installation

### Prerequisites

The following software are required:

- nodejs : Download and Install Node JS from
  ```sh
  https://nodejs.org/en/download/
  ```

1. Clone the repo using below URL

```sh
https://github.com/BAKS-MAN/playwright-demo.git
```

2. Navigate to folder and install npm packages using:

```sh
npm install
```

3. For first time installation run below command to download required browsers

```sh
npx playwright install
```

## Test execution

Project contains simple tests for Carrefour website. Tests are written with Page object model usage.

For test execution the following command should be used:

```sh
npx playwright test
```