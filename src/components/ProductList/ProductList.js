import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productListSelector } from '../../store/modules/productList/selectors'
import { getProductList } from '../../store/modules/productList/slice'

const ProductList = () => {
    const dispatch = useDispatch()
    const productListData = useSelector( state => productListSelector(state) );
    console.log(productListData)
    useEffect(() => {
        dispatch(getProductList())
    }, [])
    return <div>Productlist</div>
}

export default ProductList
