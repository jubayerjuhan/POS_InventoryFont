export const categoryProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "CATEGORY_PRODUCTS_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "CATEGORY_PRODUCTS_FULFILLED":
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case "CATEGORY_PRODUCTS_REJECTED":
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}