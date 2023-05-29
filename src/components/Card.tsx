import React from 'react'
import styled from "styled-components"

type Props = {
    name: string,
    prices: number,
    brand: string,
    quantity: boolean,
}

const Main = styled.div`
    height: 250px;
    border: 1px solid black;
    width: 200px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    cursor: pointer;
    justify-content: space-between;
    background-color: azure;
    border-radius: 10px;
`
const Title = styled.div`
    font-size: 22px;
    text-align: center;
    text-transform: capitalize;
    font-weight: 500;
`

const P = styled.p`
    font-size: 15px;
    text-align: center;
`
const Price = styled.p`
    text-align: end;
`
const Span = styled.span`
    font-weight: bold;
`

const Card = (props: Props) => {
    const { name, prices, brand, quantity } = props

    return (
        <Main>
            <Title>{brand} {name}</Title>
            <P>Restam: {quantity} unidades</P>
            <Price>valor: <Span>R${prices}</Span></Price>
        </Main>
    )
}

export default Card