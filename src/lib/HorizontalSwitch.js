import React, { Component } from "react";
import PropTypes from "prop-types";

import { Blob, BlobChecked } from "./animations";
import { HorizontalWrapper } from "./wrappers";

import hexColorPropType from "./util/hexColorPropType";
import twoParamFuncPropType from "./util/twoParamFuncPropType";

class HorizontalSwitch extends Component {
  render() {
    let { bgUnCheckedColor, bgCheckedColor } = this.props;

    return (
      <HorizontalWrapper
        blob={Blob}
        blobChecked={BlobChecked}
        colorOff={bgUnCheckedColor}
        colorOn={bgCheckedColor}
      >
        <input
          type="checkbox"
          // defaultChecked={defaultChecked}
          // disabled={disabled}
          // onChange={this.handleChange}
        />
        <span />
      </HorizontalWrapper>
    );
  }
}

HorizontalSwitch.propTypes = {
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: twoParamFuncPropType,
  key: PropTypes.string,
  bgCheckedColor: hexColorPropType,
  bgUnCheckedColor: hexColorPropType,
  foregroundColor: hexColorPropType
};

HorizontalSwitch.defaultProps = {
  defaultChecked: false,
  disabled: false,
  bgCheckedColor: "#FF4651",
  bgUnCheckedColor: "#48EA8B",
  foregroundColor: "#fff",
  key: "sample-key"
};

export default HorizontalSwitch;
