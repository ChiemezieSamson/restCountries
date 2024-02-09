import React from 'react'
import {useApiFetchingComponent} from "./../../sharedComponent/sharedComponent"
import { useOutletContext } from 'react-router-dom';

const SingleRegion = () => {
  const [lang, login] = useOutletContext();
  const { data, loading, error } = useApiFetchingComponent(login)
  console.log(data ? data.map(country => country.subregion) : "");
  return (
    <div>
      
    </div>
  )
}

export default SingleRegion
