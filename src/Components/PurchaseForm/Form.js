import { Formik } from 'formik';
import React from 'react'
import * as yup from "yup";
import './form.css'

const schema = yup.object().shape({
  supplier: yup.string().required("Field is required"),
  discount: yup.number('Enter Number Only').required("Field is required"),
  totalAmount: yup.number('Enter Number Only').required("Field is required"),
});

const Form = () => {
  const handleFormSubmit = (values) => {
    console.log(values);
  }
  return (
    <Formik
      initialValues={
        {
          supplier: "",
          discount: "",
          totalAmount: "",
        }
      }
      validationSchema={schema}
      onSubmit={(values) => handleFormSubmit(values)}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        console.log(errors),
        <form action="" onSubmit={handleSubmit} className='purchaseForm'>
          <div className="form-group">
            <label htmlFor="supplier">Supplier</label>
            <input
              type="text"
              name="supplier"
              id="supplier"
              className="form-control"
              placeholder="Enter your name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.supplier && (
              <div className="error">{errors.supplier}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="discount">Discount</label>
            <input
              type="text"
              name="discount"
              id="discount"
              className="form-control"
              placeholder="Enter your name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.discount && (
              <div className="error">{errors.discount}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="totalAmount">Total Amount</label>
            <input
              disabled
              type="text"
              name="totalAmount"
              id="totalAmount"
              className="form-control"
              placeholder="Enter your name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.totalAmount && (
              <div className="error">{errors.totalAmount}</div>
            )}
          </div>
          <input type="submit" value="Submit" onClick={handleSubmit} />

        </form>
      )}

    </Formik>
  )
}

export default Form