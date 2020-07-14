import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Logout from './components/Logout'
import Admin from './components/Admin'
import Chart from './components/Chart'

import 'bootstrap/dist/css/bootstrap.css'; 

class App extends Component {
    render(){
        return(
            <Switch>
                <Route exact path='/' component={Login}></Route>
                <Route path='/admin' component={Admin}></Route>
                <Route path='/logout' component={Logout}></Route>
                <Route path='/chart' component={Chart}></Route>
            </Switch>
        )
    }
}

export default App