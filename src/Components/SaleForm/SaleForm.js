import { Formik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import * as yup from "yup";
import { addSale } from '../../Redux/Action/saleaction.js';



const SaleForm = ({ selectedProducts, setselectedProducts }) => {
  const dispatch = useDispatch();
  console.log(selectedProducts, 'sp')

  // calculation of total amount
  const subtotal = selectedProducts?.reduce((acc, item) => acc + item.salePrice * parseInt(item.quantity), 0);
  const tax = subtotal * 0;
  let total = subtotal + tax;

  const [fieldValues, setFieldValues] = React.useState({
    name: '',
    discount: 0,
    paymentMethod: '',
    tax,
    total,
    subtotal,
    customerType: 'Walk In'
  });
  total = total - fieldValues.discount;


  // handle qunatity
  const handleQuantityChange = (e, item) => {
    const newProducts = selectedProducts.map(product => {
      if (product._id === item._id) {
        product.quantity = e.target.value
      }
      return product
    })
    setselectedProducts(newProducts)
  }

  // handle change of form field
  const handleChange = (e) => {
    console.log(e.target.value)
    setFieldValues({ ...fieldValues, [e.target.name]: e.target.value });
  }


  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedProducts.length <= 0) {
      alert('Please select products')
      return
    }
    for (const property in fieldValues) {
      if (fieldValues[property] === '') {
        alert(`Please Fill The Field ${property}`)
        return
      }
    }
    const saleItems = []
    selectedProducts?.forEach(item => {
      saleItems.push({
        product: item._id,
        quantity: item.quantity,
      })
    });

    const sale = {
      customerType: fieldValues.customerType,
      name: fieldValues.name,
      paymentMethod: fieldValues.paymentMethod,
      saleItems,
      priceBreakdown: {
        subtotal,
        tax,
        discount: fieldValues.discount,
        total,
      }
    }

    console.log(sale)
    dispatch(addSale(sale))
  }
  console.log(fieldValues, 'fieldValues')
  return (
    <>
      <h2>Sale</h2>
      <div className='purchase__product-section purchase-form_header'>
        <p>Name</p>
        <p>Quantity</p>
        <p>Unit Price</p>
        <p>Total Price</p>
      </div>
      {selectedProducts?.map((item) => (
        <div className='purchase__product-section'>
          <p>{item.name}</p>
          <input type="number" defaultValue={item.quantity} onChange={(e) => handleQuantityChange(e, item)} />
          <p>{item.salePrice}</p>
          <p>{item.salePrice * item.quantity}</p>
        </div>
      ))

      }

      <form action="" onSubmit={handleSubmit} className='purchaseForm'>
        <div className="form-group">
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="name Name"
            onChange={handleChange}
          />

        </div>
        <div className="form-group">
          <label htmlFor="discount">Discount</label>
          <input
            type="number"
            name="discount"
            className="form-control"
            placeholder="Discount"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="subtotal">Subtotal</label>
          <input
            disabled
            type="number"
            name="subtotal"
            className="form-control"
            onChange={handleChange}
            value={subtotal}
          />
        </div>
        <div className="form-group">
          <label htmlFor="totalAmount">Tax</label>
          <input
            disabled
            type="number"
            name="tax"
            className="form-control"
            placeholder="Total Amount"
            value={tax}
          />
        </div>
        <div className="form-group">
          <label htmlFor="totalAmount">Total</label>
          <input
            disabled
            type="number"
            name="total"
            className="form-control"
            placeholder="Total Amount"
            value={total}
          />
        </div>
        <div className="form-group">
          <label htmlFor="totalAmount">Total</label>
          <select name="paymentMethod" id="" onChange={handleChange}>
            <option value={null}>Select Payment Method</option>
            <option value='Cash'>Cash</option>
            <option value="bKash">bKash</option>
            <option value="Debit Card">Debit Card</option>
          </select>
        </div>


        <input type="submit" value="Submit" onClick={handleSubmit} />


      </form>
    </>
  )
}

export default SaleForm;