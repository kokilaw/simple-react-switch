import React, { Component } from "react";
import PropTypes from "prop-types";
import { rgba } from "polished";

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
        colorOffShadow={rgba(bgUnCheckedColor, 0.2)}
        colorOn={bgCheckedColor}
        colorOnShadow={rgba(bgCheckedColor, 0.2)}
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
  bgCheckedColor: "#48EA8B",
  bgUnCheckedColor: "#FF4651",
  foregroundColor: "#fff",
  key: "sample-key"
};

export default HorizontalSwitch;
