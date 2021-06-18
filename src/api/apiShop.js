const BASE_URL = process.env.REACT_APP_API_BASE_URL

const fecthProductList = async () => {
    const url = `${BASE_URL}api/product`
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(
                `Fallo al obtener la api en fecthProductList. Error:${response.status}`
            )
        }     
        const productList = await response.json()
        return productList
    } catch (error) {
        throw new Error(`Warning: ${error.message}`)
    }
}

const fecthProduct = async (id) => {
    const url = `${BASE_URL}api/product/${id}`
    try {
        const response = await fetch(url)
        const product = await response.json()
        return product
    } catch (error) {
        throw new Error(
            `Error al obtener el producto con ID: ${id}: ${error.message}`
        )
    }
}

export { fecthProduct, fecthProductList }
