const BASE_URL = process.env.REACT_APP_API_BASE_URL

const fecthProductList = async () => {
    const url = `${BASE_URL}api/product`
    try {
        const response = await fetch(url)
       
        console.log(response)
        const productList = await response.json()
        return productList
    } catch (error) {
        throw new Error(
            `Error al obtener la lista de producto: ${error.message}`
        )
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
