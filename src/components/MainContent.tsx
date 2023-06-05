'use client'

import React, {useContext} from 'react';
import styled from "styled-components";
import Card from './Card';
import { cellphones } from "../util/cellphones";

import { FilterContext } from '../context/Filter';

type Props = {
    brand: string
};

const Main: any = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 40px;
    flex-wrap: wrap;
    background-color: #00e8e8;
`;

const MainContent = (props: Props) => {

    const filterContext = useContext(FilterContext) 

    return (
        <Main>
            {cellphones.map((cellphone: any) => {
                if (cellphone.brand === filterContext.brand) {
                    return <div key={cellphone.name}>
                        <Card brand={cellphone.brand} name={cellphone.name} quantity={cellphone.quantity} prices={cellphone.price} />
                    </div>
                }
                if(filterContext.brand == "all") {
                    return <div key={cellphone.name}>
                        <Card brand={cellphone.brand} name={cellphone.name} quantity={cellphone.quantity} prices={cellphone.price} />
                    </div>
                }
            })}
        </Main>
    );
};

export default MainContent;