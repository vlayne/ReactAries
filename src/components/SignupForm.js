import React, {Component} from 'react'
import styled from 'styled-components'
import { Form, Button, Input } from '../common'

export default class SignupForm extends Component {
    state = {
        
    }

    handleChange = ({target: {name, value}}) => this.setState({[name]: value})

    submitForm = (e) => {
        e.preventDefault()
        if(this.props.onFormSubmit){
            this.props.onFormSubmit(this.state)
        }
    }

    render(){
        const {email, password, username, password_confirm} = this.state
        const isInvalidPassword = (password != password_confirm)
        const isValid = username && email && password && !isInvalidPassword
        return(
            <Form onSubmit={this.submitForm}>
                <Input type="text" value={username} placeholder="username" name="username" onChange={this.handleChange} />
                <Input type="email" value={email} placeholder="email" name="email" onChange={this.handleChange} />
                <Input type="password" value={password} placeholder="password" name="password" onChange={this.handleChange} />
                <Input type="password" value={password_confirm} placeholder="confirmation" name="password_confirm" onChange={this.handleChange} />
                {isInvalidPassword && <label>Mot de passe différent</label>}
                {isValid && <Button>INSCRIPTION</Button>}
            </Form>
        )
    }
}

const MainContainer = styled.div`
    
`