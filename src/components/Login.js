import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import './Components.css'
import Layout from '../assets/Layout'

export default class Login extends Component{
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if(token == null){
            loggedIn = false
        }
        this.state = {
            username: "",
            password: "",
            loggedIn
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submitForm(e){
        e.preventDefault()
        const {username, password} = this.state
        if(username === "admin" && password === "password"){
            localStorage.setItem('token', 'qwertyuiop')
            this.setState({
                loggedIn: true
            })
        }
    }

    render() {
        if(this.state.loggedIn){
            return <Redirect to="/admin" />
        }
        return(
            <div>
                <div>
               <div className="limiter">
		            <div className="container-login">
			            <div className="wrap-login">
				            <form className="login-form validate-form" onSubmit={this.submitForm.bind(this)}>
                            <div>
                                <img className="logo" src={Layout.loginImgs.logo} alt="logo"/>
                            </div>
                                <span className="login-form-title">
						            Login
					            </span>
					    <div className="wrap-input validate-input" value={this.state.username} onChange={this.onChange}>
						    <input className="input" type="text" name="username"/>
						    <span className="focus-input"></span>
						    <span className="label-input">Username</span>
					    </div>
					    <div className="wrap-input validate-input"  value={this.state.password} onChange={this.onChange}>
						    <input className="input" type="password" name="password"/>
						    <span className="focus-input"></span>
						    <span className="label-input">Password</span>
					    </div>
					    <div className="container-login-form-btn">
						    <button className="login-form-btn" type="submit">
						    	Login
						    </button>
					    </div>
				            </form>
                    <div className="login-more" >
				    </div>
			    </div>
		    </div>
	    </div>
      </div>
            </div>
        )
    }
}

