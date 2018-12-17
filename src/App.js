import React, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './pages/Landing'

export default class App extends Component {

    state = {
        
    }

    render(){

        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/contact" component={() => <h1>CONTACT</h1>} />
                </Switch>
            </Router>
        )
    }

}