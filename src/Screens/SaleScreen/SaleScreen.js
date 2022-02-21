import React from 'react'
import Form from '../../Components/PurchaseForm/Form.js'
import SaleForm from '../../Components/SaleForm/SaleForm.js'
import Sidebar from '../../Components/Sidebar/Sidebar.js'

const SaleScreen = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
              <div className='product_card_wrapper'>
                <img src="https://media.istockphoto.com/vectors/black-plus-sign-positive-symbol-vector-id688550958?k=20&m=688550958&s=612x612&w=0&h=wvzUqT3u3feYygOXg3GB9pYBbqIsyu_xpvfTX-6HOd0=" alt="" />
                <h3>Add Category</h3>
              </div>
              {arr.map(item => (
                <div className='product_card_wrapper'>
                  <img src="https://fscl01.fonpit.de/devices/17/2017.png" alt="" />
                  <h3>Product Name</h3>
                </div>
              ))}
            </div>
          </div>

          {/* products */}
          <div className='card__container'>
            <h1>Products</h1>
            <div className='cards_wrapper'>
              <div className='product_card_wrapper'>
                <img src="https://media.istockphoto.com/vectors/black-plus-sign-positive-symbol-vector-id688550958?k=20&m=688550958&s=612x612&w=0&h=wvzUqT3u3feYygOXg3GB9pYBbqIsyu_xpvfTX-6HOd0=" alt="" />
                <h3>Add Products</h3>
              </div>
              {arr.map(item => (
                <div className='product_card_wrapper'>
                  <img src="https://fscl01.fonpit.de/devices/17/2017.png" alt="" />
                  <h3>Product Name</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='smallPadding purchase_wrapper'>
          <h2>Sale</h2>
          <div className='purchase__product-section purchase-form_header'>
            <p>Name</p>
            <p>Quantity</p>
            <p>Unit Price</p>
          </div>
          <div className='purchase__product-section'>
            <p>Name</p>
            <p>Quantity</p>
            <p>Unit Price</p>
          </div>
          <SaleForm />
        </div>
      </div>
    </div>
  )
}

export default SaleScreen