import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const Navbar = () => {

  const caritems = useSelector((state: RootState) => state.cart.cartItems);


  return (
   <div className="container mt-3">
     <div className="row">
        <div className=" d-flex justify-content-end">
       <h2> Cart {caritems?.length} </h2>
        </div>
    </div>
   </div>
  )
}

export default Navbar