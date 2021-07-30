import React from 'react'



class Button  extends React.Component {
    
    onClickHandle = () => {
        this.props.onClickChange(this.props.label)
    }


    render () {
        return (
            <div className={this.props.class}>
                <button className="ui button" onClick={this.onClickHandle}>{this.props.label}</button>
            </div>
        )
    }    
}

export default Button;