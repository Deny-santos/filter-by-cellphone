import React, { useState } from "react"
const useBrands = () => {

    const [showOption, setShowOption] = useState(false)

    const handleShow = () => {
        setShowOption(!showOption)
    }

    const handleHidde = () => {
        setShowOption(false)
    }

    return {
        handleHidde, handleShow, showOption, setShowOption
    }
}

export default useBrands