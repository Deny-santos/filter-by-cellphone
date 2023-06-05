import React from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from "react-icons/ai"

type Props = {}

const InputContainer = styled.div`
    height: 40px;
    background-color: #000000;
    display: flex;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    padding: 0px 10px;
    gap: 10px;

    svg {
        color: white;
    }
`

const Input = styled.input`
    height: 80%;
    border-radius: 10px 0px 0px 10px;
    border: none;
    padding: 0px 10px;
    background-color: transparent;
    outline: none;
    color: white;
`

const InputSearch = (props: Props) => {
    return (
        <InputContainer>
            <Input placeholder="o que procura?" />
            <AiOutlineSearch />
        </InputContainer>
    )
}

export default InputSearch