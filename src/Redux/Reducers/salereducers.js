export const addSaleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_SALE_PENDING':
      return {
        ...state,
        loading: true,
      }
    case 'ADD_SALE_FULFILLED':
      return {
        ...state,
        loading: false,
        success: action.payload,
      }
    case "RESET_SUCCESS":
      return {
        ...state,
        success: null,
      }
    case 'ADD_SALE_REJECTED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state;
  }
}