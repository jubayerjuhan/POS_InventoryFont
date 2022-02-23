import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddCategory from '../../Components/AddCategory/AddCategory.js'
import Addproduct from '../../Components/AddProduct/Addproduct.js'
import Showcards from '../../Components/ShowCards/Showcards.js'
import Sidebar from '../../Components/Sidebar/Sidebar.js'
import { getallProducts, getAllCategories } from '../../Redux/Action/productaction.js'
import './products.css'

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);
  const { categories } = useSelector(state => state.categories);
  const { success: catSuccess } = useSelector(state => state.addCategory);
  const { success } = useSelector(state => state.addProduct);

  const arr = [1, 2, 9, 3, 4, 5, 5, 6, 7, 5, 3]
  const [productOpen, setProductOpen] = useState(false);
  const [categoryOpen, setcategoryOpen] = useState(false);
  console.log(categoryOpen)
  // useEffect On load
  useEffect(() => {
    dispatch(getallProducts());
    dispatch(getAllCategories());
  }, [dispatch, success, catSuccess])
  return (
    <div className='separator'>
      <Addproduct open={productOpen} setProductOpen={setProductOpen} />
      <AddCategory open={categoryOpen} setcategoryOpen={setcategoryOpen} />
      <div>
        <Sidebar />
      </div>
      <div className='smallPadding'>
        <div className='card__container'>
          <h1>Categories</h1>
          <div className='cards_wrapper'>
            <div className='product_card_wrapper' onClick={() => setcategoryOpen(true)}>
              <img src="https://media.istockphoto.com/vectors/black-plus-sign-positive-symbol-vector-id688550958?k=20&m=688550958&s=612x612&w=0&h=wvzUqT3u3feYygOXg3GB9pYBbqIsyu_xpvfTX-6HOd0=" alt="" />
              <h3>Add Category</h3>
            </div>
            {categories?.map(item => (
              <div className='product_card_wrapper'>
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
            <div className='product_card_wrapper' onClick={() => setProductOpen(true)}>
              <img src="https://media.istockphoto.com/vectors/black-plus-sign-positive-symbol-vector-id688550958?k=20&m=688550958&s=612x612&w=0&h=wvzUqT3u3feYygOXg3GB9pYBbqIsyu_xpvfTX-6HOd0=" alt="" />
              <h3>Add Products</h3>
            </div>
            {products?.map(item => (
              <div className='product_card_wrapper'>
                <img src={item.image ? item.image : ''} alt="" />
                <h3>{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Products