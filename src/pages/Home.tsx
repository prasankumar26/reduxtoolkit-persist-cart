import products from '../data/products'

import type { RootState } from '../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct, decrement, increment } from '../features/cart/CartSlice'
import { Link } from 'react-router-dom'

const Home = () => {

    const count = useSelector((state: RootState) => state.cart.value)
  const dispatch = useDispatch()

  return (
   <div className="container my-5">

            <div>
                <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
                >
                Increment
                </button>
                <span>{count}</span>
                <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
                >
                Decrement
                </button>
            </div>


    <div className="row">
        {products.map((product:any) => {
            return (
                <div className="col-lg-3 col-6 mb-4" key={product.id} 
                onClick={()=> dispatch(addProduct(product))}
                >
                    <Link to={`/product/${product.id}`} className='text-decoration-none'>
                  <div className="card p-2">
                    <div className="card-image">
                      <img src={product.image} alt={product.title} className="img-fluid" />
                    </div>
                    <div className="card-title">
                        <h3>{product.title}</h3>
                        <h3>{product.price}</h3>
                    </div>
                  </div>
                </Link>
                </div>
            )
        })}
      
    </div>

   
   </div>
  )
}

export default Home