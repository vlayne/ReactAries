import React from 'react'
import styled from 'styled-components'

export const Form = styled.form`

`

export const Input = styled.input`
    padding: 0.5em;
    font-size: 1.3em;
    border-radius: 0.2em;
    font-weight: bold;
    border: 1px solid ${props => props.invalid ? "red" : "#dedede"};
`

export const Button = styled.button`
    background-color: white;
    border: 1px solid #dedede;
    color: black;
    border-radius: 0.3em;
    padding: 1em;
    cursor: pointer;

    &:hover{
        background-color: #dedede;
    }
`