# simple-react-switch

[![npm](https://img.shields.io/npm/v/simple-react-switch.svg)](https://www.npmjs.com/package/simple-react-switch)

A simple toggle switch component for ReactJS inspired from this cool [switch animation](https://dribbble.com/shots/5429846-Switcher-XLIV) by [Oleg Frolov](https://dribbble.com/Volorf).

Referred most of the styling from [this codepen.io project](https://codepen.io/aaroniker/pen/oaQdQZ) by [Aaron Iker](https://codepen.io/aaroniker/).

<img src="/art/preview.gif" alt="sample" title="sample" width="400" height="300" align="center" vspace="52" />

<br />
<br />

Demo is available <a href="https://kokilaw.github.io/simple-react-switch/" target="_blank">here</a>.

## Installation

```bash
npm install simple-react-switch
```

## Usage

```javascript
import React, { Component } from "react";
import { HorizontalSwitch } from "simple-react-switch";

class App extends Component {

  handleChange = (isChecked, key, event) => {
    // Take action...
  };

  render() {
    return (
      <div>
        <HorizontalSwitch onStateChange={this.handleChange} id={"123456"} />
      </div>
    );
  }
  
}

```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
