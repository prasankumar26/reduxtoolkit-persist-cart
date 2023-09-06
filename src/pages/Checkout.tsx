import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const Checkout = () => {
  const caritems = useSelector((state: RootState) => state.cart.cartItems);
  const formvalues = useSelector((state: RootState) => state.cart.formValues);

  console.log(formvalues, "formvalues");
  
  

  return (
    <div className='container my-5'>
        <div className="row">
          {caritems.map((cartiem) =>{
            return (
              <div className="col-lg-3 col-6 mb-3">
            <div className="card mx-auto text-center">
              <div className="card-image">
                <img src={cartiem?.image} style={{width: '200px'}} alt="" className="img-fluid" />
              </div>
              <h4>{cartiem?.title}</h4>
            </div>
          </div>
            )
          })}
        </div>
    </div>
  )
}

export default Checkout