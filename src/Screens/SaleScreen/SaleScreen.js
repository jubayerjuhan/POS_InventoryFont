import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../../Components/PurchaseForm/Form.js'
import SaleForm from '../../Components/SaleForm/SaleForm.js'
import Sidebar from '../../Components/Sidebar/Sidebar.js'
import { getAllCategories, getallProducts, getProductsWithCategory } from '../../Redux/Action/productaction.js'

const SaleScreen = () => {
  const dispatch = useDispatch();
  const { success } = useSelector(state => state.addSale)
  const { categories } = useSelector(state => state.categories);
  const { products } = useSelector(state => state.products);
  const [selectedCategory, setSelectedCategory] = useState(categories ? categories[0] : '')
  const [selectedProducts, setselectedProducts] = useState([])

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getallProducts());
  }, [])

  // show products after category click
  let productsToShow = []
  if (products) {
    productsToShow = []
    products?.forEach(item => {
      if (item.category === selectedCategory._id) {
        productsToShow.push(item)
      }
    })
    console.log(productsToShow, 'gotcha')
  }

  // handle click of product
  const handleProductClick = (product) => {
    if (selectedProducts.find(item => item._id === product._id)) {
      setselectedProducts(selectedProducts.filter(item => item._id !== product._id))
    } else {
      setselectedProducts([...selectedProducts, { ...product, quantity: 1 }])
    }
  }

  // handle sale success
  if (success) {
    alert('Sale Success')
    dispatch({ type: 'RESET_SUCCESS' })
  }

  return (
    <div className='separator'>
      <div>
        <Sidebar />
      </div>
      <div className='purchase__Wrapper'>
        <div className='smallPadding'>
          <div className='card__container'>
            <h1>Categories</h1>
            <div className='cards_wrapper'>
              {categories?.map(item => (
                <div className='product_card_wrapper' key={item.name} onClick={() => setSelectedCategory(item)}>
                  <img src={item.image} alt="" />
                  <h3>{item.name}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* products */}
          <div className='card__container'>
            <h1>Products</h1>
            <div className='cards_wrapper'>
              {productsToShow.map(item => (
                <div className='product_card_wrapper' key={item.name} onClick={() => handleProductClick(item)}>
                  <img src={item.image} alt="" />
                  <h3>{item.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='smallPadding purchase_wrapper'>

          <SaleForm selectedProducts={selectedProducts} setselectedProducts={setselectedProducts} />
        </div>
      </div>
    </div>
  )
}

export default SaleScreen