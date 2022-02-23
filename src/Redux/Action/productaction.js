import client, { formClient } from '../../API/client.js'

export const addproduct = (productdata, image) => async (dispatch) => {
  console.log(productdata, 'odododod')

  // form data
  const form = new FormData()
  form.append('name', productdata.name)
  form.append('salePrice', productdata.salePrice)
  form.append('purchasePrice', productdata.purchasePrice)
  form.append('discount', productdata.discount)
  form.append('category', productdata.category)
  form.append('image', image)

  console.log(productdata, 'form')
  try {
    dispatch({ type: "ADD_PRODUCT_PENDING" })
    const { data } = await client.post("/product/new", form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    dispatch({ type: "ADD_PRODUCT_FULFILLED", payload: data.success })

  } catch (err) {
    dispatch({ type: "ADD_PRODUCT_REJECTED", error: (err.response && err.response.data.message) || err.message })
  }
}




export const getallProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "ALL_PRODUCTS_PENDING" })

    const { data } = await client.get("/product/all");
    dispatch({ type: "ALL_PRODUCTS_FULFILLED", payload: data.products })
  } catch (err) {
    dispatch({ type: "ALL_PRODUCTS_REJECTED", error: err.message || err.response.data.message })

  }
}


// category

export const addCategory = (categoryData, image) => async (dispatch) => {
  const form = new FormData()
  form.append('name', categoryData.name)
  form.append('image', image)
  console.log(form.get('name'), 'form')

  try {
    dispatch({ type: "ADD_CATEGORY_PENDING" })
    const { data } = await client.post("/category/new", form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log(data, 'data')
    dispatch({ type: "ADD_CATEGORY_FULFILLED", payload: data.success })
  }
  catch (err) {
    dispatch({ type: "ADD_CATEGORY_REJECTED", error: (err.response && err.response.data.message) || err.message })
  }
}



export const getAllCategories = () => async (dispatch) => {
  try {
    dispatch({ type: "ALL_CATEGORY_PENDING" })

    const { data } = await client.get("/category/all");
    console.log(data, 'data')
    dispatch({ type: "ALL_CATEGORY_FULFILLED", payload: data.categories })
  } catch (err) {
    dispatch({ type: "ALL_CATEGORY_REJECTED", error: err.message || err.response.data.message })

  }
}
export const getProductsWithCategory = (categoryId) => async (dispatch) => {
  try {
    dispatch({ type: "CATEGORY_PRODUCTS_PENDING" })

    const { data } = await client.get("/product/category?categoryId=" + categoryId);
    console.log(data, 'data')
    dispatch({ type: "CATEGORY_PRODUCTS_FULFILLED", payload: data.products })
  } catch (err) {
    dispatch({ type: "CATEGORY_PRODUCTS_REJECTED", error: err.message || err.response.data.message })

  }
}