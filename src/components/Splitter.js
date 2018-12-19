import React, {Component} from 'react'
import styled from 'styled-components'

export default class Splitter extends Component {

    state = {

    }

    render(){
        const {leftContent, rightContent, leftDetails, rightDetails, detailsLabel} = this.props
        return(
            <MainContainer {...this.props}>
                <LeftPart {...this.props}>
                    <Title>{leftContent}</Title>
                    {leftDetails &&
                        <Details rightAlign>
                            <DetailsLabel>{detailsLabel ? detailsLabel : "Réalisé le"}</DetailsLabel>
                            <DetailsText>{leftDetails}</DetailsText>
                        </Details>
                    }
                </LeftPart>
                <RightPart {...this.props}>
                    <Title>{rightContent}</Title>
                    {rightDetails &&
                        <Details leftAlign>
                            <DetailsLabel>{detailsLabel ? detailsLabel : "Réalisé le"}</DetailsLabel>
                            <DetailsText>{rightDetails}</DetailsText>
                        </Details>
                    }
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
    position: relative;
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
    position: relative;
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

const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    background-color: #453939;
    color: white;
    height: 6em;
    width: 25em;
    padding: 1em;
    bottom: 7em;
    right: ${props => props.rightAlign && "-7em"};
    left: ${props => props.leftAlign && "-7em"};
`

const DetailsLabel = styled.div`
    font-weight: bold;
`

const DetailsText = styled.div`

`