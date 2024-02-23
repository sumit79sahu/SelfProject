import React from 'react'
import { EMPTY_CART } from '../utils/constants'

const EmptyCart = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col pt-10">
    <img src={EMPTY_CART} alt="empty cart" className=" w-96" />
    <h4 className="text-xl font-bold text-[#535665] mt-3 mb-2">
      Your Cart is Empty
    </h4>
    <span className="text-[#535665]">
      You can go to home page to view more restaurants
    </span>
    <button className="font-bold mt-8 bg-orange-600 text-white p-3">
      SEE RESTAURANTS NEAR YOU
    </button>
  </div>
  )
}

export default EmptyCart
