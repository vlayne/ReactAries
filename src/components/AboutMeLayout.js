import React, {Component} from 'react'
import styled from 'styled-components'

export default class AboutMe extends Component {

    state = {

    }

    render(){
        const {title,content} = this.props
        return(
            <MainContainer {...this.props}>
                <Table {...this.props}>
                    <Title>{title}</Title>
                    <Content>{content}</Content>
                </Table>
            </MainContainer>
        )
    }
}

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    height: ${props => props.height};
`
const Table = styled.div`

`
const Content = styled.div`

`
const Title = styled.h1`
    font-size: ${props => props.bigTitle ? "7em" : "5em"};
`