import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from "./Reducers/userreducer.js";
import { composeWithDevTools } from "redux-devtools-extension";
import { addCategory, addProductReducer, allCategoryReducer, allProductsReducer } from '../Redux/Reducers/productreducers.js';
import logger from "redux-logger";
import thunk from 'redux-thunk'
import { categoryProductReducer } from "./Reducers/categoryreducers.js";
import { addSaleReducer } from "./Reducers/salereducers.js";


const reducer = combineReducers({
  // ...
  user: userReducer,
  addProduct: addProductReducer,
  addCategory: addCategory,
  products: allProductsReducer,
  categories: allCategoryReducer,
  categoryProduct: categoryProductReducer,
  addSale: addSaleReducer,
});

const middlewares = [thunk, logger];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)))


export default store;