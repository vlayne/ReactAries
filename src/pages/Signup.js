import React, {Component} from 'react'
import styled from 'styled-components'
import { SignupForm } from '../components'

export default class Signup extends Component {
    state = {
        
    }

    handleNewUser = (data) => {
        this.setState({
            new_user: true
        })
    }

    render(){
        const { new_user } = this.state
        return(
            <MainContainer>
                <h1>SIGNUP PAGE</h1>
                {new_user ?
                    <p>Utilisateur connecté</p>
                :
                    <SignupForm onFormSubmit={this.handleNewUser} />
                }
            </MainContainer>
        )
    }
}

const MainContainer = styled.div`
    
`