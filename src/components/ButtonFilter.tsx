import React from 'react'
import styled from "styled-components"


type Props = {
    children: React.ReactNode,
    handleFilter: () => void
}

const Button = styled.button`
    background-color: transparent;
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;

`



const ButtonFilter = (props: Props) => {
    const { children = "", handleFilter } = props

    return (
        <>
            <Button onClick={handleFilter}>{children}</Button>
        </>
    )
}

export default ButtonFilter