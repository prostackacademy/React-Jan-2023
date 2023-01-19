import React from 'react'
let Message = () => {
    let message = "Welcome to React World"

    return <React.Fragment>
        <h3>Hello,GM</h3>
        <h4>Message Value:{message}</h4>
        <button className="btn btn-success">Test</button>
    </React.Fragment>
}
export default Message