# Material UI ReDoc

This is a wrapper for [ReDoc](https://github.com/Redocly/redoc) using [Material UI](https://material-ui.com/)

The aim of this wrapper is to provide <b>theming</b> support the <code>RedocStandalone</code> component using Material UI's [Theme](https://material-ui.com/customization/default-theme/#default-theme)

## Getting started

### 1. Install package

Install using [npm](https://docs.npmjs.com/getting-started/what-is-npm):

    npm i redoc-material-ui @material-ui/core react react-dom styled-components

### 2. Enjoy :smile:

## Usage as a React component

import the <code>MuiRedocStandalone</code> component to render the API definition

```js
import { MuiRedocStandalone } from "redoc-material-ui";
```

and use it somewhere in your component:

```js
<MuiRedocStandalone specUrl="url/to/your/spec" />
```

## Material UI Theming

The component uses [useTheme](https://material-ui.com/styles/api/#usetheme-theme) hook to get the Theme object for your components and apply it appropriately to the component
