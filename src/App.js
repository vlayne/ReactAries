import React, {Component, Fragment} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Landing, Contact } from './pages'
import { Navbar } from './components'



export default class App extends Component {

    state = {
        
    }

    render(){

        return(
            <Router>
                <Fragment>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }

}