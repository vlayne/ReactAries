import React, {Component} from 'react'
import styled from 'styled-components'

export default class Splitter extends Component {

    state = {

    }

    render(){
        return(
            <MainContainer>
                <LeftPart>
                    <h1>LEFT</h1>
                </LeftPart>
                <RightPart>
                    <h1>RIGHT</h1>
                </RightPart>
            </MainContainer>
        )
    }
}

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 200vh;
`

const LeftPart = styled.div`
    background-color: green;
    height: 100%;
    flex-grow: 1;
`

const RightPart = styled.div`
    background-color: red;
    height: 100%;
    flex-grow: 1;
`