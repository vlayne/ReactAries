import React, { Component, Fragment } from 'react'
import { SigninForm } from '../components'

export default class Landing extends Component {

    handleConnection = (data) => {
        console.log("LANDING: SIGNIN FORM SUBMIT", data)
    }

    render(){
        return(
            <Fragment>
                <h1>LANDING COMPONENT</h1>
                <SigninForm onFormSubmit={this.handleConnection} password_mode />
            </Fragment>
        )
    }
}