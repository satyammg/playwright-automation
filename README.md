# Playwright Automation Testing Project

This project contains automated tests using Playwright, a modern end-to-end testing framework for web applications.

## Project Structure

```
├── pages/              # Page Object Models
│   ├── firstTest.js
│   └── loginPage.js
├── tests/             # Test Specifications
│   ├── apiTest.spec.js
│   ├── example.spec.js
│   ├── firstTest.spec.js
│   └── test.spec.js
├── playwright.config.js # Playwright Configuration
└── package.json       # Project Dependencies
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Configuration

The project is configured to run tests with the following settings:

- Tests run in parallel
- Video recording is disabled
- Slow motion delay of 1000ms is enabled
- Trace is captured on first retry
- Currently configured to run only on Chromium browser

## Running Tests

Run all tests:
```bash
npx playwright test
```

Run a specific test file:
```bash
npx playwright test tests/firstTest.spec.js
```

Run tests in headed mode:
```bash
npx playwright test --headed
```

## Test Reports

HTML reports are automatically generated after test execution. To view the report:
```bash
npx playwright show-report
```

The report will be available in the `playwright-report` directory.

## Browsers

By default, tests run on Chromium. Additional browsers (Firefox, WebKit) are commented out in the configuration but can be enabled as needed.

## CI/CD

The project includes CI-specific configurations:
- Retries are set to 2 in CI environment
- Parallel execution is disabled in CI
- Test isolation is enforced by failing the build if `test.only` is found in the code

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request