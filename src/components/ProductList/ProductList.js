import React, { useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { productListSelector } from '../../store/modules/productList/selectors'
import { getProductList } from '../../store/modules/productList/slice'
import { serchStringSelector } from '../../store/modules/search/selectors'
import './ProductList.css'

const ProductList = () => {
    const dispatch = useDispatch()
    const productListData = useSelector((state) => productListSelector(state))
    useEffect(() => {
        dispatch(getProductList())
    }, [])

    const inputSerchString = useSelector((state) => serchStringSelector(state))
    const filterProduct = productListData.filter((element) => {
        const model = element.model.toLowerCase()
        return model.includes(inputSerchString.toLowerCase())
    })
    const id = 'cGjFJlmqNPIwU59AOcY8H'
    const product =
        filterProduct.length !== 0 ? (
            filterProduct.map((item) => {
                const boxProduct = (
                    <Link
                        to={`product/${id}`}
                        className="itemProductList"
                        key={item.id}
                    >
                        <img src={item.imgUrl} alt={item.model} />
                        <div>
                            <span>{item.brand} </span>
                            <span>{item.model}</span>
                        </div>
                        <div>
                            <span>{item.price}</span>
                            <span>€</span>
                        </div>
                    </Link>
                )
                return boxProduct
            })
        ) : (
            <div>
                Lo siento , no hay ningun producto con ese nombre. Prueba de
                nuevo
            </div>
        )
    return (
        <Fragment>
            <section>
                <div className="containerProductList">{product}</div>
            </section>
        </Fragment>
    )
}

export default ProductList
