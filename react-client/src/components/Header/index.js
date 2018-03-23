import React, { Component } from 'react'
import './index.css'
import logo from '../../logo.png'
import Search from '../Search'
import { NavLink, withRouter } from 'react-router-dom'
import swal from 'sweetalert2'
import api from 'api-client'
import storage from '../services/storage.js'

class Header extends Component {

    constructor() {
        super()
        this.state = {
            loged: false
        }
    }

    componentDidMount() {
        (storage.getToken()) ? this.setState({ loged: true }) : this.setState({ loged: false })
    }

    swalLogin() {
        swal({
            title: 'Login',
            html:
                "<input id='username' class='swal2-input' placeholder='Username' type='text'>" +
                "<input id='password' class='swal2-input' placeholder='Password' type='password'>",
            focusConfirm: false,
            preConfirm: () => {
                return {
                    username: document.getElementById('username').value,
                    password: document.getElementById('password').value,
                }
            }
        }).then(res => {
            api.login(res.value.username, res.value.password)
                .then(result => {
                    if (result.status === 'OK') {
                        this.props.history.push('/')
                        storage.setToken(result.data.token)
                        this.setState({ loged: true })

                    }
                    else {
                        console.log('Error, username and/or password wrong')
                    }
                })
        })
            .catch(err => {
                console.log(err.message)
            })
    }

    logOut() {
        this.props.history.push('/')
        storage.removeToken()
        this.setState({ loged: false })
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-inverse navbar-fixed-top color-header">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>
                                <a href=""><img src={logo} alt="" /></a>
                            </div>
                            <Search />
                            <div className="collapse navbar-collapse" id="myNavbar">
                                <ul className="nav navbar-nav">
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/category">Category</NavLink></li>
                                    <li><NavLink to="/collection">Collection</NavLink></li>
                                </ul>
                                {(this.state.loged)
                                    ?
                                    <ul class="nav navbar-nav navbar-right">
                                        <li class="dropdown">
                                            <a class="dropdown-toggle" data-toggle="dropdown">Page 1<span class="caret"></span></a>
                                            <ul class="dropdown-menu">
                                                <li><NavLink to="/createrecipe">Create Recipe</NavLink></li>
                                                <li><NavLink to="/myrecipes">MyRecipes</NavLink></li>
                                                <li><a href="" onClick={e => { e.preventDefault(); this.logOut() }}><span className="glyphicon glyphicon-user" /> Logout</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    :
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><a href=""><span className="glyphicon glyphicon-user" /> Sign Up</a></li>
                                        <li><a href="" onClick={e => { e.preventDefault(); this.swalLogin() }}><span className="glyphicon glyphicon-log-in" /> Login</a></li>
                                    </ul>
                                }
                            </div>
                        </div>
                    </nav>
                </header>

            </div>
        );
    }
}

export default withRouter(Header)

