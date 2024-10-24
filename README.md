# IATI Design System

## What is the IATI Design System?

The IATI Design System is a set of reusable styles and components which should be used in IATI web products, along with guidance on how to use them.

## Using the IATI Design System

Please see the [Storybook site](https://iati.github.io/design-system/) for instructions.

## Contributing to the IATI Design System

### Prerequisites

#### Node v20

IATI Design System requires Node v20. We recommend installing [Node Version Manager](https://github.com/nvm-sh/nvm) and running the command `nvm use` to use the Node version set in the `.nvmrc` file at the root of the project.

### Running locally

To run Storybook locally, take the following steps:

1. Install dependencies: `npm install`
2. Start Storybook: `npm start`

You will see live updates in the browser when you update styles or stories.

### Production build

#### CSS

To check the CSS production build, take the following steps:

1. Build the CSS: `npm run build`
2. View the CSS file: `./dist/css/iati.css`.

#### Storybook

The check the Storybook production build, take the following steps:

1. Build the Storybook: `npm run build:storybook`
2. Serve the Storybook: `npm run serve:storybook`
