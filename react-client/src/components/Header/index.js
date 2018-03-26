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
            loged: false,
            user: []
        }
    }

    componentWillMount() {
        (storage.getToken()) ? this.setState({ loged: true }) : this.setState({ loged: false })

        api.protocol = 'http'
        api.host = 'localhost'
        api.port = '5000'

        api.listUser(storage.getToken()).then(res => res.data).then(user => this.setState({ user }))
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
                        api.listUser(storage.getToken()).then(res => res.data).then(user => {
                            this.setState({ user })
                        })

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

    swalRegister() {
        swal({
            title: 'Register',
            html:
                "<input id='name' class='swal2-input' placeholder='Name' type='text'>" +
                "<input id='surname' class='swal2-input' placeholder='Surname' type='text'>" +
                "<input id='email' class='swal2-input' placeholder='Email' type='email'>" +
                "<input id='username' class='swal2-input' placeholder='Username' type='text'>" +
                "<input id='password' class='swal2-input' placeholder='Password' type='password'>",
            focusConfirm: false,
            preConfirm: () => {
                return {
                    name: document.getElementById('name').value,
                    surname: document.getElementById('surname').value,
                    email: document.getElementById('email').value,
                    username: document.getElementById('username').value,
                    password: document.getElementById('password').value
                }
            }
        }).then(res => {
            api.createUser(res.value.name, res.value.surname, res.value.email, res.value.username, res.value.password)
                .then(res => {
                    if (res.status === 'OK') {
                        api.login(res.data.id.username, res.data.id.password)
                            .then(res => {
                                if (res.status === 'OK') {
                                    this.props.history.push('/')
                                    storage.setToken(res.data.token)
                                    this.setState({ loged: true })
                                    api.listUser(storage.getToken()).then(res => res.data).then(user => {
                                        this.setState({ user })
                                    })
                                }
                                else {
                                    console.log('Error, username and/or password wrong')
                                }
                            })
                    }
                    else {
                        console.log('User already exist')
                    }
                })
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
                                    {/*<li><NavLink to="/collection">Collection</NavLink></li>*/}
                                </ul>
                                {(this.state.loged)
                                    ?
                                    <ul className="nav navbar-nav navbar-right">
                                        <li className="dropdown">
                                            <a className="dropdown-toggle" data-toggle="dropdown">{(this.state.user) ? this.state.user.username : ''}<span className="caret"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><NavLink to="/createrecipe">Create Recipe</NavLink></li>
                                                <li><NavLink to="/myrecipes">MyRecipes</NavLink></li>
                                                <li><a href="" onClick={e => { e.preventDefault(); this.logOut() }}><span className="glyphicon glyphicon-user" /> Logout</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    :
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><a href="" onClick={e => { e.preventDefault(); this.swalRegister() }}><span className="glyphicon glyphicon-user" /> Sign Up</a></li>
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

