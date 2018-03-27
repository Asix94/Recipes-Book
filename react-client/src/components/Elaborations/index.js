import React, { Component } from 'react'
import './css/main.css'

class Elaborations extends Component{
    render(){
        return(
            <div>
                <input type="text" className="form-control mgb" name="elaboration" id="elaboration" placeholder="elaboration" required onChange={this.InputValue} />
            </div>
        )
    }
}

export default Elaborations