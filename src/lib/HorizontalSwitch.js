import React, { Component } from "react";
import PropTypes from "prop-types";

import { HorizontalWrapper } from "./wrappers";

class HorizontalSwitch extends Component {
  onChange = e => {
    const isChecked = e.target.checked;
    if (this.props.onStateChange !== undefined) {
      this.props.onStateChange(isChecked, this.props.id, e);
    }
  };

  render() {
    let { defaultChecked, disabled, id } = this.props;
    let { onColor, offColor, foregroundColor, disabledColor } = this.props;

    return (
      <HorizontalWrapper
        disabled={disabled}
        onColor={onColor}
        offColor={offColor}
        foregroundColor={foregroundColor}
        disabledColor={disabledColor}
      >
        <input
          id={id}
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
  id: PropTypes.string.isRequired,
  onStateChange: PropTypes.func.isRequired,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  onColor: PropTypes.string,
  offColor: PropTypes.string,
  foregroundColor: PropTypes.string,
  disabledColor: PropTypes.string
};

HorizontalSwitch.defaultProps = {
  defaultChecked: false,
  disabled: false,
  id: "sample-key"
};

export default HorizontalSwitch;
