import { useContext } from 'react';
import { FilterContext } from '../context/Filter';
import { FilterTypeContext } from '../context/filterType';

const useCellphone = () => {

    const filterContext = useContext(FilterContext)
    const filterType = useContext(FilterTypeContext)
    const { setBrand } = filterContext
    const { setSearchByButton, searchByButton, sugestionVisibility, setSugestionVisibility} = filterType


    const handleFilter = (brand: string) => {
        setBrand(brand)
        setSearchByButton(true)
        setSugestionVisibility(false)
    }


    return {
        handleFilter, 
        setBrand, 
        setSearchByButton, 
        searchByButton, 
        filterContext, 
        FilterTypeContext, 
        filterType, 
        sugestionVisibility,
        setSugestionVisibility
    }
}

export default useCellphone