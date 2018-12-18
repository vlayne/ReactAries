import React, { Component, Fragment } from 'react'
import { SigninForm } from '../components'
import styled from 'styled-components'
export default class Landing extends Component {

    state = {
        time: 10
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({time: this.state.time -1})
        }, 1000)
    }


    handleConnection = (data) => {
        console.log('Appel HANDLE CONNECTION... PREY FOR YOUR MEMO')
        this.setState({
            logged: true,
            username: data.username,
            email: data.email
        })
    }

    render(){
        const { username, email, logged, time } = this.state
        return(
            <TimeContainer>
                
                {time < 0 ?
                    <Fragment>
                        <h1>FINI !</h1>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Y7DnKSkOEvI?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Fragment>
                :
                    <Fragment>
                        <h1>Il vous reste exactement</h1>
                        <h2>{time} secondes</h2>
                    </Fragment>
                }
            </TimeContainer>
        )
    }
}

const TimeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
`