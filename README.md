# simple-react-switch

[![npm](https://img.shields.io/npm/v/simple-react-switch.svg)](https://www.npmjs.com/package/simple-react-switch) [![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

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

## API

| Prop                                  | Type              | Default                                                                                  | Description                                                                                                                                                                                                               |
| ------------------------------------- | ----------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| defaultChecked                        | bool              | false                                                                                    | If true, the switch is set to checked. If false, it is not checked.                                                                                                                                                       |
| id                                    | string            | **Required**                                                                               | Set as an attribute to the embedded checkbox. This is useful for the associated label, which can point to the id in its htmlFor attribute.                                                                                |
| onStateChange _([isChecked], [id], [event])_ | func              | **Required**                                                                      | Invoked when the user toggles the switch. It is passed three arguments: _isChecked_, which is a boolean that describes the presumed future state of the checked prop (1), the event object (2) and the id prop (3). |
| disabled                              | bool              | false                                                                                    | When disabled, the switch will no longer be interactive and its colors will be greyed out.                                                                                                                                |
| offColor                              | string            | '#FF4651'                                                                                   | The switch will take on this color when it is _not_ checked. Only accepts hex-colors.                                                                                                                                     |
| onColor                               | string            | '#48EA8B'                                                                                   | The switch will take on this color when it is checked. Only accepts hex-colors.                                                                                                                                           |
| foregroundColor                               | string            | '#fff'                                                                                   | The toggle icon with animation will take on this color. Only accepts hex-colors.                                                                                                                                           |
| disabledColor                               | string            | '#D3D3D3'                                                                                   | The switch will take on this color when disabled. Only accepts hex-colors.                                                                                                                                           |


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
