import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

    state = {

    }

    componentDidMount(){
        document.addEventListener('scroll', () => {
            this.setState({scroll: window.scrollY})
        })
    }

    render(){
        const {scroll} = this.state

        return(
            <MainContainer scroll={scroll}>
                <LeftPart>
                    <CustomLink main to="/">
                        J.
                    </CustomLink>
                    <CustomLink to="/projects">
                        Projets
                    </CustomLink>
                    <CustomLink to="/apropos">
                        A propos
                    </CustomLink>
                    <CustomLink to="/contact">
                        Contact
                    </CustomLink>
                </LeftPart>
            </MainContainer>
        )
    }
}

const MainContainer = styled.div`
    z-index: 1000;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: ${props => props.scroll ? "white" : ""};
    border-bottom: ${props => props.scroll ? "2px solid #dedede" : ""};

`
const LeftPart = styled.div`
    flex-grow: 1;
`
    
const RightPart = styled.div`
    flex-grow: 1;
    text-align: right;
`
const CustomLink = styled(Link)`
    margin: 0 1em;
    font-weight: ${props => props.main ? "900" : ""};
    font-size: ${props => props.main ? "1.2em" : ""};
`