import { useContext, useState } from "react";
import useCellphone from "./useCellphone";
import { FilterTypeContext } from "../context/filterType"
import { FilterContext } from '../context/Filter';


const useInputSearch = () => {
    
    const filterContext = useContext(FilterContext)
    const visibilities = useContext(FilterTypeContext)
    const { cellphoneName, setCellphoneName } = filterContext
    const { sugestionVisibility, setSugestionVisibility } = visibilities

    const { searchByButton, setSearchByButton } = useCellphone()

    const [typing, setTyping] = useState("")

    const handleFocus = () => {
        setTimeout(() => {

            console.log(`o search by ${searchByButton}`)
        },700)
    }

    const handleType = () => {
        setSugestionVisibility(true)

    }

    const handleBlur = () => {
        setTimeout(() => setSugestionVisibility(false), 100 )
        console.log(`o search by ${searchByButton}`)
    }

    const handleSelectCellphone = (name: string) => {
        setSearchByButton(false)
        setCellphoneName(name)
        console.log(`o nome é ${name}`)
    }

    return {
        handleBlur, 
        handleFocus, 
        handleType,
        handleSelectCellphone, 
        sugestionVisibility, 
        setSugestionVisibility, 
        searchByButton, 
        setSearchByButton,
        typing,
        setTyping,
        
    }
}

export default useInputSearch