import React,{useState ,useEffect} from 'react'
import EmptyCart from '../components/EmptyCart';
import { useAppSelector } from '../utils/store';
import CartItems from '../components/CartItems';
import PriceBox from '../components/PriceBox';

const CartLayout = () => {
    const cart = useAppSelector((store) => store.Cart);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
      try {
        if (Object.keys(cart).length !== 0)
          setTotalPrice(
            Object.entries(cart).reduce(
              (initital, [name, { info, count }], index) =>
                initital + ((info.price || info.defaultPrice) / 100) * count,
              0
            )
          );
      } catch (error) {}
    },[cart]);
    return (
        <div className="">
          {Object.keys(cart).length === 0 ? (
            <EmptyCart/>
          ) : (
            <div className=" flex gap-5 justify-between">
              <div className=" w-[70%] shadow-md p-3 rounded-lg">
                <CartItems cartData={cart} />
              </div>
  
              <div className="w-[30%]">
                <PriceBox totalPrice={totalPrice}/>
              </div>
            </div>
          )}
        </div>
    );
  };
  
  export default CartLayout;
  