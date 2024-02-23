import React from 'react'

const PriceBox = ({totalPrice}:any) => {
  return (
    <div className="p-5  border rounded-md">
    <h3 className=" text-center font-semibold text-xl">
      Bill Details
    </h3>
    <div className="text-gray-500 my-5 flex justify-between">
      <div className="flex flex-col gap-y-1">
        <span>Item Total</span>
        <span>Delivery Fee</span>
        <span>GST and Restaurant Charges</span>
      </div>
      <div className="flex flex-col gap-y-1">
        <span>₹ {totalPrice}</span>
        <span>₹ 54</span>
        <span>₹ 53.49</span>
      </div>
    </div>
    <div className=" font-semibold my-5 border-t-2 border-black pt-2 flex  justify-between">
      <span>TO PAY</span>
      <span>₹ {totalPrice + 54 + 53.49}</span>
    </div>
  </div>
  )
}

export default PriceBox
