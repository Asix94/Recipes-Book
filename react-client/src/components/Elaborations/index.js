import React, { Component } from 'react'
import './css/main.css'

class Elaborations extends Component{
    render(){
        return(
            <div>
                <input type="text" className="form-control mgb" name={`elaboration${this.props.count}`} id={`elaboration${this.props.count}`} placeholder="elaboration" required onChange={this.props.InputValue} />
            </div>
        )
    }
}

export default Elaborations