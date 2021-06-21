import React from 'react'

const ImagenProduct = ({ product }) => {
    const { imgUrl, model } = product
    return <img src={imgUrl} alt={model} />
}
export default ImagenProduct
