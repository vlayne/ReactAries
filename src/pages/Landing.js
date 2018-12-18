import React, { Component, Fragment } from 'react'
import { SigninForm } from '../components'

export default class Landing extends Component {

    state = {

    }

    handleConnection = (data) => {
        this.setState({
            logged: true,
            username: data.username,
            email: data.email
        })
    }

    render(){
        const { username, email, logged } = this.state
        return(
            <Fragment>
                <h1>LANDING COMPONENT</h1>
                {logged ? 
                    <p>Utilisateur connecté : {username}, son email est {email}</p>    
                :
                    <SigninForm onFormSubmit={this.handleConnection} />
                }
            </Fragment>
        )
    }
}