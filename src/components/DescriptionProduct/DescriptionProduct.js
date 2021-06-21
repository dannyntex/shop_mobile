import React, { Fragment } from 'react'
import './DescriptionProduct.css'

const DescriptionProduct = ({ product }) => {
    const propiedades = [
        'brand',
        'model',
        'price',
        'cpu',
        'ram',
        'os',
        'displayResolution',
        'battery',
        'primaryCamera',
        'secondaryCmera',
        'dimentions',
        'weight'
    ]
    const mapProduct = propiedades.map((pro, i) => {
        // console.log(Object.keys(product))
        // if(Object.keys(product) === pro){
        //     console.log(product)
        // }
        return (
            <Fragment>
                <div className="titleDescription">{pro}</div>
                <div className="valueDescription">{product[pro]}</div>
            </Fragment>
        )
    })
    return (
        <Fragment>
            <h3>Descripcion del Producto</h3>
            <div className="containerDescription">{mapProduct}</div>
        </Fragment>
    )
}

export default DescriptionProduct
