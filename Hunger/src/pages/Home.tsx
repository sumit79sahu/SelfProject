import React from 'react'
import FoodChoice from '../layouts/FoodChoice'
import TopRestaurants from '../layouts/TopRestaurants'
import  useHome  from '../hooks/useHome'
import { Status } from '../enums/Status'
import Simmer from '../components/Simmer'
import OnlineRestaurants from '../layouts/OnlineRestaurants'
import CuisineOptions from '../layouts/CuisineOptions'

const Home = () => {
  const status=useHome();
  if(status===Status.pending) return(<Simmer/>)
  if(status===Status.rejected) return(<h1>Something Went Wrong</h1>)

  return (
    <div className=''>
      <FoodChoice/>
      <div className='border my-8 sm:my-10 md:my-12'></div>
      <TopRestaurants/>
      <div className='border my-8 sm:my-10 md:my-12'></div>
      <OnlineRestaurants/>
      <div className='border my-8 sm:my-10 md:my-12'></div>
      <CuisineOptions/>
    
    </div>
  )
}

export default Home
