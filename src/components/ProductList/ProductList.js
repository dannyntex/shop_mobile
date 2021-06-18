import React, { useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productListSelector } from '../../store/modules/productList/selectors'
import { getProductList } from '../../store/modules/productList/slice'
import './ProductList.css'

const ProductList = () => {

    const dispatch = useDispatch()
    const productListData = useSelector((state) => productListSelector(state))
    useEffect(() => {
        dispatch(getProductList())
    }, [])
    const product = productListData.map((item) => {
        const boxProduct = (
            <div className="itemProductList" key={item.id}>
            <img src={item.imgUrl} alt={item.model} />
                <div>
                    {item.brand} {item.model}
                </div>
                <div>
                {item.price}€</div>

            </div>
        )
        return boxProduct
    })
    return (
        <Fragment>
        
            <header>Product list</header>
            <section>
                <div className="containerProductList">{product}</div>
            </section>
        </Fragment>
    )
}

export default ProductList
