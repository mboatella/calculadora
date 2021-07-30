import React from 'react'

class Display extends React.Component {   
    render() {
        return (
                <div className="display"><h3>{(this.props.cont.length !== 0) ? this.props.cont.join("") : 0}</h3></div>
        )

    }
}

export default Display;