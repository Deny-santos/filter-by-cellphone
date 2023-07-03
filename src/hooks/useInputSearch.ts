import { useContext } from "react";
import useCellphone from "./useCellphone";
import { FilterTypeContext } from "../context/filterType";
import { FilterContext } from "../context/Filter";

const useInputSearch = () => {
    const filterContext = useContext(FilterContext);
    const visibilities = useContext(FilterTypeContext);

    if (!filterContext || !visibilities) {
        throw new Error('Error: Missing context value');
    }

    const { setCellphoneName } = filterContext;
    const { sugestionVisibility, setSugestionVisibility } = visibilities;

    const { searchByButton, setSearchByButton } = useCellphone();

    const handleFocus = () => {
        setTimeout(() => {
            console.log(`o search by ${searchByButton}`);
        }, 100);
    };

    const handleType = () => {
        setSugestionVisibility(true);
    };

    const handleBlur = () => {
        setTimeout(() => setSugestionVisibility(false), 500);

    };

    const handleSelectCellphone = (name: string) => {
        setSearchByButton(false);
        
        setTimeout(() => {
            setCellphoneName(name)
        }, 500);

        console.log(`o nome é ${name}`);
    };

    return {
        handleBlur,
        handleFocus,
        handleType,
        handleSelectCellphone,
        sugestionVisibility,
        setSugestionVisibility,
        searchByButton,
        setSearchByButton,
    };
};

export default useInputSearch;
