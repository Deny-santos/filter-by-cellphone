import useCellphone from '@/hooks/useCellphone'
import React from 'react'
import Card from './Card'

type Props = {
    cellphones: any,
}

const FilterType = (props: Props) => {

    const { cellphones } = props
    const { filterContext, searchByButton } = useCellphone()

    return (
        <>
            {searchByButton ? (
                <>
                    {cellphones?.map((cellphone: any) => {
                        if (cellphone.brand === filterContext?.brand || filterContext?.brand == "all") {
                            return <div key={cellphone.name}>
                                <Card brand={cellphone.brand} name={cellphone.name} quantity={cellphone.quantity} prices={cellphone.price} />
                            </div>
                        }
                    })}
                </>
            ) : (
                <>
                    {cellphones?.map((cellphone: any) => {
                        if (cellphone.name === filterContext?.cellphoneName) {
                            return <div key={cellphone.name}>
                                <Card brand={cellphone.brand} name={cellphone.name} quantity={cellphone.quantity} prices={cellphone.price} />
                            </div>
                        }
                    })}
                </>
            )

            }</>
    )
}

export default FilterType