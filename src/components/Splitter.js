import React, {Component} from 'react'
import styled from 'styled-components'

export default class Splitter extends Component {

    state = {

    }

    render(){
        const {leftContent, rightContent} = this.props
        return(
            <MainContainer {...this.props}>
                <LeftPart {...this.props}>
                    <Title>{leftContent}</Title>
                </LeftPart>
                <RightPart {...this.props}>
                    <Title>{rightContent}</Title>
                </RightPart>
            </MainContainer>
        )
    }
}

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    height: ${props => props.height};
    min-height: ${props => props.height ? props.height : "100vh"};
`

const LeftPart = styled.div`
    background-color: ${props => props.backgroundLeft};
    background-image: url(${props => props.imageLeft});
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 3em;
`

const RightPart = styled.div`
    background-color: ${props => props.backgroundRight};
    background-image: url(${props => props.imageRight});
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 3em;
`

const Title = styled.h1`
    font-size: ${props => props.bigTitle ? "7em" : "5em"};
`