import React from 'react'
import { useSearchParams } from 'react-router-dom';
import useCollection from '../hooks/useCollection';
import { Status } from '../enums/Status';
import Simmer from '../components/Simmer';
import CollectionLayout from '../layouts/CollectionLayout';
const Collection = () => {
    const [searchParams,]=useSearchParams()

  
    const status = useCollection(searchParams);
   
  
    if (status===Status.pending) return <Simmer />;
    if(status===Status.rejected) return (<h1>Something went wrongs</h1>)
  
    return (
      <div>
        <CollectionLayout/>
      </div>
    );
  };
  

export default Collection
