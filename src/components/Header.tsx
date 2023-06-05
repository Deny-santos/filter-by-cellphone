import React, { useContext } from "react"
import styled from 'styled-components'
import ButtonFilter from './ButtonFilter'
import { filteredbrand } from "../util/cellphones"
import { FilterContext } from '../context/Filter';
import InputSearch from "./InputSearch";

type Props = {}

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
`

const Options = styled.div`
    display: flex;
    gap: 10px;
`


const Header = (props: Props) => {

    const filterContext = useContext(FilterContext)
    const { setBrand } = filterContext

    const handleFilter = (brand: string) => {
        setBrand(brand)
    }
    return (
        <Main>
            <LogoContainer>
                <Logo>Deny Tec</Logo>
            </LogoContainer>
            <Options>
                {filteredbrand.map((brand: string, index: number) => (
                    <ButtonFilter handleFilter={() => handleFilter(brand)} key={index}>{brand}</ButtonFilter>

                ))}
                <ButtonFilter handleFilter={() => handleFilter("all")}>todos</ButtonFilter>
            </Options>
            <InputSearch/>
        </Main>
    )
}

export default Header