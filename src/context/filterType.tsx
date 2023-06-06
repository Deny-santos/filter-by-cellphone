import { createContext, useState } from "react"

export const FilterTypeContext = createContext({})

type Props = {
    children: React.ReactNode
}

export const FilterType = (props: Props) => {
    
    const { children } = props
    const [searchByButton, setSearchByButton] = useState(true)
    const [sugestionVisibility, setSugestionVisibility] = useState(false)
    
    return (
        <FilterTypeContext.Provider value={{
            searchByButton, setSearchByButton, setSugestionVisibility, sugestionVisibility
        }}>
            {children}
        </FilterTypeContext.Provider>
    )
} 