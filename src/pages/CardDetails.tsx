import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { Link, useParams } from 'react-router-dom'; // Import useParams from react-router-dom
import { useState } from 'react';
import { addToCart, updateFormValues } from '../features/cart/CartSlice';

const initialState = {
  name: '',
  email: '',
  number: '',
  description: '',
}

const CardDetails = ({ match }: any) => {
  const dispatch = useDispatch();

  const [values, setValues] = useState(initialState)

  const { id } = useParams<{ id: string }>();
  const products = useSelector((state: RootState) => state.cart.products);

  const product = id && products[id];

  console.log(id, "id");
  console.log(product, "product");

  if (id === undefined || product === undefined) {
    return <div>Product not found</div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    dispatch(updateFormValues({ name, value }));
  };

  // addToCart 
  const addToCartItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(addToCart(product));
  };
  
  const handleSubmit = (e:any) =>{
     e.preventDefault()
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-lg-6">
        <div className="card p-2 text-center mx-auto">
        <div className="card-image">
          <img src={product?.image} style={{width: '300px'}} alt="" className="img-fluid" />
           <h4>Title:- {product?.title}</h4>
           <h4>Price:- {product?.price}</h4>
        </div>
       
      </div>
        </div>
        <div className="col-12 col-lg-6">
          <form onSubmit={handleSubmit} className='mt-5'>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Enter Name</label>
            <input type="name" className="form-control" id="name" aria-describedby="name" name="name" value={values.name} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={values.email} name="email" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Enter Number</label>
            <input type="phone" className="form-control" id="number" aria-describedby="number" name="number" value={values.number} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Enter Description</label>
            <input type="name" className="form-control" id="description" aria-describedby="description" value={values.description} onChange={handleChange} name="description" />
          </div>
          <div className="d-flex mt-4">
       <button className="btn bg-dark text-white me-3" onClick={addToCartItem}>Add To Cart</button>
        <Link to="/checkout" type='submit' className="btn bg-dark text-white">Checkout</Link>
       </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CardDetails