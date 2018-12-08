import React from 'react'

import CodeEditor from './components/CodeEditor'
import Icon from '../assets/favicon.ico'

const code = `class App extends React.Component {

    constructor() {
        super()
        this.state = { switchState: false }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(isChecked, key, event) {
        this.setState({ switchState: isChecked })
    }

    render() {
        return (
            <div style={displayStyles}>
                <div>
                    <div>
                    <HorizontalSwitch
                        onStateChange={this.handleChange}
                        id={'123456'}
                        onColor={'#48EA8B'}
                        offColor={'#FF4651'}
                        disabledColor={'#D3D3D3'}
                        foregroundColor={'#fff'}
                        defaultChecked={false}
                        disabled={false}
                    />
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '16px' }}>
                        {this.state.switchState ? 'ON' : 'OFF'}
                    </div>
                </div>
            </div>
        )
    }

}`

const DemoPage = () => (
    <div className="container">
        <div className="row justify-content-center">
            <img src={Icon} alt={'icons'} style={{ maxHeight: '60px' }} />
        </div>
        <div className="row justify-content-center">
            <h1>simple-react-swtich</h1>
        </div>
        <div className="row m-t-20">
            <div className="col-sm-12 col-md-12 col-lg-12 mx-auto">
                <CodeEditor code={code} />
            </div>
        </div>
    </div>
)

export default DemoPage
