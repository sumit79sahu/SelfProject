import React from 'react'
import useHome from '../hooks/useHome'
import { Status } from '../enums/Status'
import Simmer from '../components/Simmer'
import { useParams } from 'react-router-dom'
import FilterLayout from '../layouts/FilterLayout'
const Filter = () => {
    const status=useHome()
    const {filterName}=useParams()
    if(status===Status.pending) return <Simmer/>
    if(status===Status.rejected)return <h1>Something Went Wrong</h1>
  return (
    <div>
        <FilterLayout filterName={filterName}/>
    </div>
  )
}

export default Filter
