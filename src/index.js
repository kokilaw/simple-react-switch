import React from 'react'
import ReactDOM from 'react-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'

import './style.css'
import DemoPage from './demo'

// class App extends Component {
//     constructor() {
//         super()
//         this.state = { switchState: false }
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(isChecked, key, event) {
//         this.setState({ switchState: isChecked })
//     }

//     render() {
//         return (
//             <div>
//                 <div>
//                     <HorizontalSwitch
//                         onStateChange={this.handleChange}
//                         id={'123456'}
//                         onColor={'#48EA8B'}
//                         offColor={'#FF4651'}
//                         disabledColor={'#D3D3D3'}
//                         foregroundColor={'#fff'}
//                     />
//                 </div>
//                 <div style={{ textAlign: 'center' }}>
//                     {this.state.switchState ? 'ON' : 'OFF'}
//                 </div>
//             </div>
//         )
//     }
// }

ReactDOM.render(<DemoPage />, document.getElementById('root'))
