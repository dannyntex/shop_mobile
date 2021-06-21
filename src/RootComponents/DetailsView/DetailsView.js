import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ActionProduct from '../../components/ActionProduct'
import DescriptionProduct from '../../components/DescriptionProduct'
import ImagenProduct from '../../components/ImagenProduct'
import { getProduct } from '../../store/modules/detailsView/slice'
import { productSelector } from '../../store/modules/detailsView/selectors'
import { isLoading } from '../../store/modules/detailsView/selectors'

import './DetailsView.css'
const DetailsView = () => {
    const { id } = useParams()
    const product = useSelector((state) => productSelector(state))
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct(id))
    }, [id])
    if (!isLoading || product.id === undefined) {
        return <div>Cargando...</div>
    }

    return (
        <section className="containerDetailsView">
            <ImagenProduct product={product} />
            <section>
                <DescriptionProduct product={product} />
                <ActionProduct product={product} />
            </section>
        </section>
    )
}
export default DetailsView
