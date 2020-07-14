import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom'
import "./Components.css"

export default class Admin extends Component {

    constructor(props){
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if(token == null){
            loggedIn = false
        }

        this.state = {
            loggedIn
        }
    }

  render() {
      if(this.state.loggedIn === false){
        return <Redirect to="/" />
      }
    return(
      <div>
          <h3>Esta vista solo puede ser accesible mediante el Login</h3>
          <button className="admin-btn">
              <Link to="/chart">Ir al chart</Link>
            </button>
          <button className="admin-btn">
              <Link to="/logout">Logout</Link>
            </button>
      </div>
    )
  }
 }
 
