import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { HorizontalWrapper } from './wrappers'

class HorizontalSwitch extends Component {
    onChange = (e) => {
        const isChecked = e.target.checked
        if (this.props.onStateChange !== undefined) {
            this.props.onStateChange(isChecked, this.props.id, e)
        }
    }

    render() {
        const { defaultChecked, disabled, id } = this.props
        return (
            <HorizontalWrapper {...this.props}>
                <input
                    id={id}
                    type="checkbox"
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                    onChange={this.onChange}
                />
                <span />
            </HorizontalWrapper>
        )
    }
}

HorizontalSwitch.propTypes = {
    id: PropTypes.string.isRequired,
    onStateChange: PropTypes.func.isRequired,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
}

HorizontalSwitch.defaultProps = {
    defaultChecked: false,
    disabled: false,
    id: 'sample-key',
}

export default HorizontalSwitch
