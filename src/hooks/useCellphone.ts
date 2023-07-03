import { useContext } from 'react';
import { FilterContext } from '../context/Filter';
import { FilterTypeContext } from '../context/filterType';

const useCellphone = () => {
    const filterContext = useContext(FilterContext);
    const filterType = useContext(FilterTypeContext);

    if (!filterContext || !filterType) {
        throw new Error('Error: Missing context value');
    }

    const { setBrand } = filterContext;
    const { setSearchByButton, searchByButton, sugestionVisibility, setSugestionVisibility } = filterType;

    const handleFilter = (brand: string) => {
        setBrand(brand);
        setSearchByButton(true);
        setSugestionVisibility(false);
    };

    return {
        handleFilter,
        setBrand,
        setSearchByButton,
        searchByButton,
        filterContext,
        filterType,
        sugestionVisibility,
        setSugestionVisibility,
    };
};

export default useCellphone;
