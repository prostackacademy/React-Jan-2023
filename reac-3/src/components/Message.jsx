import React from 'react'
class Message extends React.Component {
    msg = "welcome to React World - 18"
    
    render() {

        return <div>
            <h1>Message Comp</h1>
            <h2>React Version:{this.msg}</h2>
        </div>
    }
}
export default Message