import React, { Component, Fragment } from 'react'
import { SigninForm } from '../components'

export default class Landing extends Component {

    render(){
        return(
            <Fragment>
                <h1>LANDING COMPONENT</h1>
                <SigninForm />
            </Fragment>
        )
    }
}