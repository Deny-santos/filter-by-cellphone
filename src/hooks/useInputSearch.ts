import { useContext, useState } from "react";
import useCellphone from "./useCellphone";
import { FilterTypeContext } from "../context/filterType"


const useInputSearch = () => {

    const { searchByButton, setSearchByButton } = useCellphone()
    const visibilities = useContext(FilterTypeContext)
    const { sugestionVisibility, setSugestionVisibility } = visibilities

    const [typing, setTyping] = useState("")

    const handleFocus = () => {
        setSearchByButton(false)
        console.log(searchByButton)
    }

    const handleType = () => {
        // const filtering = (search: string) => brandsAndName.filter((product) => product.includes(search))
        // setSearchByButton(filtering)
        setSugestionVisibility(true)

    }

    const handleA = () => {
        console.log("oooo")
        setSugestionVisibility(false)
    }

    return {
        handleA, 
        handleFocus, 
        handleType, 
        sugestionVisibility, 
        setSugestionVisibility, 
        searchByButton, 
        setSearchByButton,
        typing,
        setTyping
    }
}

export default useInputSearch