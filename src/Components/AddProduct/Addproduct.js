import React from 'react'
import Modal from '@mui/material/Modal';
import './modal.css'
import { Formik } from 'formik';


const Addproduct = () => {
  const fields = [
    { name: 'name', label: 'Product Name' },
    { name: 'purchasePrice', label: 'Purchase Price' },
    { name: 'salePrice', label: 'Sale Price' },
  ]
  return (
    <Modal
      open={true}
      // onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <div className='modal__container'>
        <h1>Add Product</h1>
        <Formik
          initialValues={{ name: '', purchasePrice: '', salePrice: '' }}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit
          }) => (
            <form action="" onSubmit={handleSubmit}>
              {fields.map(field => (
                <div className='appTextInput'>
                  <input
                    type="text"
                    value={values[field.name]}
                    onChange={handleChange}
                    name={field.name}
                    type="text"
                    placeholder={field.label} />
                </div>
              ))}
              <div className='appTextInput'>
                <select name="category" id="" onChange={handleChange}>
                  <option value="w">Select Category</option>
                  <option value="e">Category 1</option>
                  <option value="">Category 2</option>
                  <option value="">Category 3</option>
                </select>
              </div>

              <input type="submit" value="Submit" onClick={handleSubmit} />
            </form>
          )}
        </Formik>
      </div>
    </Modal >
  )
}

export default Addproduct