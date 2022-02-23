import client from "../../API/client.js";

export const addSale = (sale) => async (dispatch) => {
  try {
    dispatch({ type: 'ADD_SALE_PENDING' })
    const { data } = await client.post('/sale/new', sale);
    dispatch({ type: 'ADD_SALE_FULFILLED', payload: data.success });

  } catch (err) {
    dispatch({ type: 'ADD_SALE_REJECTED', payload: err?.response?.data?.message || err.message })
  }
}