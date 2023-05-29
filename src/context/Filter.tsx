import React, { createContext, useState, useContext } from "react";

type Props = {
    children: React.ReactNode;
};

export const FilterContext = createContext({});

export const Filter = (props: Props) => {
    const { children } = props;

    const [brand, setBrand] = useState("todos")

    return (
        <FilterContext.Provider value={{brand, setBrand}} >
        { children }
        </FilterContext.Provider>
    );
};


