import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
  render() {
    return(
      <div>
          <h1>Has salido correctamente del sitio</h1>
          <Link to="/">¿Deseas ingresar de nuevo?</Link>
      </div>
    )
  }
 }
