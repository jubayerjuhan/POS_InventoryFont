import { Formik } from 'formik';
import React from 'react'
import * as yup from "yup";

const schema = yup.object().shape({
  supplier: yup.string().required("Field is required"),
  discount: yup.number('Enter Number Only').required("Field is required"),
  totalAmount: yup.number('Enter Number Only').required("Field is required"),
});

const SaleForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  }

  const handleChange = (values) => {

  }
  return (

    <form action="" onSubmit={handleSubmit} className='purchaseForm'>
      <div className="form-group">
        <label htmlFor="supplier">Subtotal</label>
        <input
          disabled
          type="subtotal"
          name="supplier"
          className="form-control"
          placeholder="Supplier Name"
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
        <label htmlFor="totalAmount">Tax</label>
        <input
          disabled
          type="number"
          name="tax"
          className="form-control"
          placeholder="Total Amount"
          onChange={handleChange}
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
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="totalAmount">Total</label>
        <select name="" id="">
          <option value="">Select Payment Method</option>
          <option value="">Cash</option>
          <option value="">bKash</option>
          <option value="">Debit Card</option>
        </select>
      </div>


      <input type="submit" value="Submit" onClick={handleSubmit} />

    </form>
  )
}

export default SaleForm;