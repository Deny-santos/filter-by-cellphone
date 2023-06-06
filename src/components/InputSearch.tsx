import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from "react-icons/ai"
import { name } from "../util/cellphones"
import useInputSearch from '@/hooks/useInputSearch';

type Props = {}

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`

const Main = styled.div`
    background-color: bisque;
    display: flex;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    gap: 10px;
    flex-direction: column;
    
    svg {
        color: white;
        cursor: pointer;
    }
`

const Input = styled.input`
    background-color: #000000;
    border-radius: 10px 0px 0px 10px;
    border: none;
    padding: 0px 10px;
    outline: none;
    color: white;
    height: 40px;
`
const InputContainer = styled.div`
    background-color: #313030;
    display: flex;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    padding: 0px 10px 0px 0px ;
    gap: 10px;
    z-index: 1;
`
const Sugestion = styled.div`
    position: absolute;
    bottom: -20px;
    background-color: #313030;
    top: 40px;
    height: max-content;
    min-height: 30px;
    max-height: 400px;
    width: 100%;
    z-index: 2;
    color: white;
    border-radius: 10px;
    overflow-y: auto;
    padding: 10px 5px 10px 5px;
`

const Line = styled.div`
    padding: 5px 0px 5px 0px;
    cursor: pointer;

    :hover{
        background-color: #585656;
    }
`

const InputSearch = (props: Props) => {

    const { handleA, handleFocus, handleType, sugestionVisibility, setSugestionVisibility } = useInputSearch()

    return (
        <Container className=''>
            <Main onFocus={handleFocus} onClick={handleType} onBlur={() => setTimeout(() => setSugestionVisibility(false), 100 ) }>
                <InputContainer>
                    <Input placeholder="o que procura?" onChange={(e) => e.target.value} />
                    <AiOutlineSearch />
                </InputContainer>
            </Main>
            {sugestionVisibility ? (
                <Sugestion>
                    {name.map((el) => (
                        <Line onClick={handleA}>{el}</Line>
                    ))}
                </Sugestion>
            ): ""}
        </Container>
    )
}

export default InputSearch