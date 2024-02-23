import React from "react";
import '../../Assets/styles/Components/Cartcard.css'
import { remove ,changePrice} from '../../Store/Cart/cartSlice'
import { useDispatch } from "react-redux";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
export default function Hcard({ data}) {

    const [qty, setQty] = useState(1);

    const [trimTitle, setTrimTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

  


    const trim = (str) => {
        if (str.length > 50)
            str = str.slice(0, 41) + "...";
        setTrimTitle(str)
    }


    const In=()=>
    {
       
        dispatch(changePrice({...data,qtyPrice:data.actualPrice*(qty+1),qtyDiscountPrice:data.discountedPrice*(qty+1)}))
        setQty(qty + 1)
    }
    const De=()=>
    {
      
        dispatch(changePrice({...data,qtyPrice:data.actualPrice*(qty-1),qtyDiscountPrice:data.discountedPrice*(qty-1)}))
        setQty(qty - 1)
    }




    const dispatch = useDispatch();
    const removeProduct = (id) => {
        dispatch(remove(id))
    }

    useEffect(() => {
        try {

            trim(data.productTitle);
            
            dispatch(changePrice({...data,qtyPrice:data.actualPrice*(qty),qtyDiscountPrice:data.discountedPrice*(qty)}))
            setLoading(true);
        } catch (error) {
            setError(error)
        }

    }, [])
    // useEffect(()=>
    // {
    //     setBillData([...billData,{item:data.productTitle,qty}]);
    // },[qty])

    return (
        <>
            <Card>
                <Card.Body className="Hcard">
                    <img src={data.productImage} alt="" className="cart-product-img" />
                    <div className="cart-product-details">
                        <h5>{trimTitle}</h5>
                        <div className="product-price-details">
                            <span className="product-actual-price">&#8377;{data.actualPrice *qty}</span>
                            <span className="product-new-price">&#8377;{data.discountedPrice * qty}</span>
                            <span className="product-discount">{data.discount}% off</span>
                        </div>
                        <span>Delivery by Wed Aug 23 | <span style={{ color: 'green' }}>Free</span> </span>
                        <div className="btn-box">
                            <Button variant="danger" onClick={() => removeProduct(data.productId)}>Remove</Button>
                            <div className="Qty-counter">
                                <button onClick={De} disabled={qty === 1 ? true : false}>-</button>
                                <span>{qty}</span>
                                <button onClick={In}>+</button>
                            </div>
                        </div>
                    </div>

                </Card.Body>
            </Card>
        </>
    )
}