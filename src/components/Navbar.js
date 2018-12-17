import React, { Component } from 'react'
import styled from 'styled-components'

export default class Navbar extends Component {

    render(){
        return(
            <MainContainer>
                <LeftPart>
                    Accueil
                </LeftPart>
                <RightPart>
                    Contact
                </RightPart>
            </MainContainer>
        )
    }
}

const MainContainer = styled.div`
    border-bottom: 2px solid #dedede;
    padding: 1em;
`
const LeftPart = styled.div`
`

const RightPart = styled.div`
`