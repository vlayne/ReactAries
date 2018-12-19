import React, {Component, Fragment, Suspense} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Landing, Contact, AboutMe } from './pages'
import { Navbar } from './components'



export default class App extends Component {

    state = {}

    render(){

        return(
            <Router>
                <Fragment>
                    <Navbar />
                    <Suspense fallback={<div>LOADING COMPONENTS</div>}>
                        <Switch>
                            <Route exact path="/" component={Landing} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/a-propos" component={AboutMe} />
                        </Switch>
                    </Suspense>
                </Fragment>
            </Router>
        )
    }

}