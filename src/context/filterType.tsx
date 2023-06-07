import React, { createContext, useState } from "react";

type FilterTypeContextType = {
    searchByButton: boolean;
    setSearchByButton: React.Dispatch<React.SetStateAction<boolean>>;
    sugestionVisibility: boolean;
    setSugestionVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FilterTypeContext = createContext<FilterTypeContextType | undefined>(undefined);

type Props = {
    children: React.ReactNode;
};

export const FilterType = (props: Props) => {
    const { children } = props;

    const [searchByButton, setSearchByButton] = useState(true);
    const [sugestionVisibility, setSugestionVisibility] = useState(false);

    return (
        <FilterTypeContext.Provider
            value={{ searchByButton, setSearchByButton, sugestionVisibility, setSugestionVisibility }}
        >
            {children}
        </FilterTypeContext.Provider>
    );
};
