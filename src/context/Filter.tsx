import React, { createContext, useState } from "react";

type Props = {
    children: React.ReactNode;
};

type FilterContextType = {
    brand: string;
    setBrand: React.Dispatch<React.SetStateAction<string>>;
    cellphoneName: string;
    setCellphoneName: React.Dispatch<React.SetStateAction<string>>;
};

export const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const Filter = (props: Props) => {
    const { children } = props;

    const [brand, setBrand] = useState("all");
    const [cellphoneName, setCellphoneName] = useState("all");

    return (
        <FilterContext.Provider value={{ brand, setBrand, cellphoneName, setCellphoneName }}>
            {children}
        </FilterContext.Provider>
    );
};
