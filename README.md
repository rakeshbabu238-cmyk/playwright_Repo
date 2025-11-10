# Playwright Test Automation Framework

This repository contains automated tests using Playwright with TypeScript.

## Project Structure
```
├── pages/              # Page Object Models
│   ├── dashboardPage.ts
│   └── loginPage.ts
├── tests/             # Test files
│   ├── dashboardTest.spec.ts
│   └── loginPageTest.spec.ts
├── testing/           # Additional test files
├── utils/             # Utility functions
└── TestData/          # Test data files
```

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Run tests:
```bash
npx playwright test
```

3. View test report:
```bash
npx playwright show-report
```

## Features
- Page Object Model design pattern
- TypeScript support
- Automated test reporting
- Multiple browser support (Chromium, Firefox, WebKit)
- GitHub Actions integration for CI/CD

## Requirements
- Node.js
- NPM
- Playwright