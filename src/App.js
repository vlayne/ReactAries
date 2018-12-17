import React, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Contact from './pages/Contact'


export default class App extends Component {

    state = {
        
    }

    render(){

        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </Router>
        )
    }

}