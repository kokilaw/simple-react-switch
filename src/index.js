import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './style.css'
import { HorizontalSwitch } from './lib'

class App extends Component {
    handleChange = (isChecked, key, event) => {
        // Take action...
        // Refer README.md for parameter specification.
    }

    render() {
        return (
            <div>
                <HorizontalSwitch
                    onStateChange={this.handleChange}
                    id={'123456'}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
