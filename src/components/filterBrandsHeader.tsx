import React from 'react'
import ButtonFilter from './ButtonFilter'
import { filteredbrand } from '@/util/cellphones'
import useCellphone from '@/hooks/useCellphone'

type Props = {}

const FilterBrandsHeader = (props: Props) => {

    const { handleFilter } = useCellphone()

    return (
        <>
            {filteredbrand.map((brand: string, index: number) => (
                <ButtonFilter handleFilter={() => handleFilter(brand)} key={index}>{brand}</ButtonFilter>
            ))}
            <ButtonFilter handleFilter={() => handleFilter("all")}>todos</ButtonFilter>
        </>
    )
}

export default FilterBrandsHeader