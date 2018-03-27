import React, { Component } from 'react'
import './css/main.css'

class Ingredients extends Component{

    render(){
        return (
            <div>
                <input type="text" className="form-control mgb" name={`ingredients${this.props.count}`} id={`ingredients${this.props.count}`} placeholder="ingredients" required onChange={this.props.InputValue} />
            </div>
        )
    }
}

export default Ingredients