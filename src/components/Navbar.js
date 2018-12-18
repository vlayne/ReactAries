import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

    render(){
        return(
            <MainContainer>
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
    border-bottom: 2px solid #dedede;
    padding: 1em;
    display: flex;
    justify-content: space-between;
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