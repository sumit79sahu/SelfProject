import React, { useEffect, useState } from "react";
import '../../Assets/styles/Components/Productcard.css'
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
export default function Vcard({ data }) {

  const[trimTitle,setTrimTitle]=useState('');
  const[loading,setLoading]=useState(false);
  const[error,setError]=useState(null)


  const trim = (str) => {
    if (str.length > 50)
       str=str.slice(0, 41) + "...";
    setTrimTitle(str)
  }

  useEffect(()=>
  {
    try {
      trim(data.productTitle);
      setLoading(true);
    } catch (error) {
      setError(error)
    }

  },[])
  return (
    <>
      <Card style={{ width: '18rem' }} as={Link} to={`/productdetails/${data.productId}`} className="Vcard">
        <Card.Img variant="top" src={data.productImage} className="product-img" />
        {loading?
                <Card.Body className="product-details">
                <h5 className="product-title">{trimTitle}</h5>
                <div className="product-rating">
                  <div className="product-rate">
                    4.5 <StarIcon fontSize="x-small" />
                  </div>
                  <span className="product-rate-count">(140)</span>
                </div>
                <div className="product-price-details">
                  <span className="product-new-price"><CurrencyRupeeIcon fontSize="x-small" />{data.discountedPrice}</span>
                  <span className="product-actual-price"><CurrencyRupeeIcon fontSize="x-small"/>{data.actualPrice}</span>
                  <span className="product-discount">{data.discount}% off</span>
                </div>
                <span className="product-delivery">Free Delivery</span>
              </Card.Body>:
              <span>loading...</span>}

      </Card>
    </>
  )
}