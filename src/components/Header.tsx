'use client'

import React from "react"
import styled from 'styled-components'
import InputSearch from "./InputSearch";
import { FaBars } from "react-icons/fa"
import FilterBrandsHeader from "./filterBrandsHeader"
import useCellphone from "@/hooks/useCellphone"
import useBrands from "@/hooks/useBrands"

type Props = {}

const Bars = styled.span`
    display: none;
    padding: 0px 20px 0px 10px;
    cursor: pointer;

    svg {
        font-size: 32px;
    }

    @media screen and (max-width: 900px){
        display: block;
    }
`

const Main = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100px;
    background-color: #00e8e8;
 
`

const LogoContainer = styled.div`
    
`

const Logo = styled.span`
    font-size: 22px;
    font-weight: bold;
    padding: 0px 10px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;

    @media screen and (max-width: 600px){
        flex-direction: column;
    }
`

const Options = styled.div`
    display: flex;
    gap: 10px;

    @media screen and (max-width: 900px){
        display: none;
    }
    `

const OptionsMobile = styled.div`
        display: none;
        position: absolute;
        flex-direction: column;
        background-color: white;
        padding: 10px;
        border-radius: 10px;
        right: 10px;
        top: 70px;
        gap: 10px;

        @media screen and (max-width: 900px){
            display: flex;
        }
`

const Header = (props: Props) => {

    const { handleFilter } = useCellphone()
    const { handleHidde, handleShow, showOption } = useBrands()


    return (
        <Main>
            <LogoContainer>
                <Logo><span>Deny</span><span>Tec</span></Logo>
            </LogoContainer>
            <Options>
                <FilterBrandsHeader />
            </Options>
            <InputSearch />
            <Bars onClick={handleShow}>
                <FaBars />
            </Bars>
            {showOption ? (
                <OptionsMobile>
                    <FilterBrandsHeader/> 
                </OptionsMobile>
            ): ""}

        </Main>
    )
}

export default Header