import React from 'react'
import { useAppDispatch } from '../utils/store'
import { decrease ,increase } from '../utils/slices/cartSlice'
import veg from "../assests/veg.png"
import nonveg from "../assests/non-veg.jpg"
import { Food_Image ,DEFAULT_IMG } from '../utils/constants'
const CartItems = ({cartData}:any) => {

    const dispatch=useAppDispatch()
  return (
    <div>
          <div>
    {
      Object.entries(cartData).map(([name,{info,count}],index)=>(
        <div key={info?.id}>
            <div className="mt-4 mb-8 flex justify-between gap-10">
              <div className=" w-[80%]">
                <div className="w-5 mb-1">
                  {info?.isVeg ? (
                    <img src={veg} alt="veg" />
                  ) : (
                    <img src={nonveg} alt="nonveg" />
                  )}
                </div>
                <h4 className="text-lg font-medium">
                  {info?.name}
                </h4>
                <span className="text-base font-medium">
                  ₹ {((info?.price / 100)*count).toFixed(2) }
                </span>
                <p className=" mt-2 text-[#686b6f] text-sm">
                  {info?.description}
                </p>
              </div>
              <div className=" h-[130px] flex flex-col items-center">
                <img
                  className="w-[150px] h-full object-center rounded-lg"
                  src={  info?.imageId?Food_Image +info?.imageId:DEFAULT_IMG}
                />
                
                  <div className="border text-green-600 rounded-md shadow-md bg-white absolute translate-y-[7rem] py-[0.2rem]  flex justify-evenly w-[60px] items-center gap-1 ">
                    <span className="cursor-pointer" onClick={()=>dispatch(decrease(name))}>-</span>
                    <span>{count}</span>
                    <span className="cursor-pointer" onClick={()=>dispatch(increase(name))}>+</span>
                  </div>
                
              </div>
            </div>
            {index !==  Object.entries(cartData).length - 1 && <div className="border"></div>}
          </div>
      ))
    }
    </div>
    </div>
  )
}

export default CartItems
