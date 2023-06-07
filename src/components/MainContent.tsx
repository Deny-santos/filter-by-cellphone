'use client'

import React from 'react';
import styled from "styled-components";
import Card from './Card';
import { cellphones } from "../util/cellphones";
import useCellphone from '@/hooks/useCellphone';
import useBrands from '@/hooks/useBrands';

type Props = {

};

const Main = styled.div`
    padding: 40px;
    background-color: #00e8e8;
    min-height: 100vh;
`;

const CardList = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;

`;

const MainContent = (props: Props) => {

    const { filterContext, searchByButton } = useCellphone()
    const { handleHidde } = useBrands()

    return (
        <Main >
            <>
                {searchByButton ? (
                    <CardList onFocus={handleHidde}>
                        {cellphones.map((cellphone: any) => {
                            if (cellphone.brand === filterContext?.brand || filterContext?.brand == "all") {
                                return <div key={cellphone.name}>
                                    <Card brand={cellphone.brand} name={cellphone.name} quantity={cellphone.quantity} prices={cellphone.price} />
                                </div>
                            }
                        })}
                    </CardList>
                ) : (
                    <CardList>
                        {cellphones.map((cellphone: any) => {
                            if (cellphone.name === filterContext?.cellphoneName) {
                                return <div key={cellphone.name}>
                                    <Card brand={cellphone.brand} name={cellphone.name} quantity={cellphone.quantity} prices={cellphone.price} />
                                </div>
                            }
                        })}
                    </CardList>
                )}
            </>
        </Main>
    );
};

export default MainContent;