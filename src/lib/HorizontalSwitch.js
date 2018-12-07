import React, { Component } from "react";
import PropTypes from "prop-types";

import { HorizontalWrapper } from "./wrappers";

import twoParamFuncPropType from "./util/twoParamFuncPropType";

class HorizontalSwitch extends Component {
  onChange = e => {
    const isChecked = e.target.checked;
    if (this.props.onStateChange !== undefined) {
      this.props.onStateChange(isChecked, this.props.key);
    }
  };

  render() {
    let { defaultChecked, disabled } = this.props;

    return (
      <HorizontalWrapper>
        <input
          type="checkbox"
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={this.onChange}
        />
        <span />
      </HorizontalWrapper>
    );
  }
}

HorizontalSwitch.propTypes = {
  onStateChange: twoParamFuncPropType,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  key: PropTypes.string
};

HorizontalSwitch.defaultProps = {
  defaultChecked: false,
  disabled: false,
  key: "sample-key"
};

export default HorizontalSwitch;
