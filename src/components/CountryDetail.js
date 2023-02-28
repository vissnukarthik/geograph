import React from 'react'
import {useParams } from "react-router-dom";
import { useEffect,useState } from 'react';
import axios from 'axios';
import Detail from './DetailLeft';
import DetailRight from './DetailRight';
import DetailLeft from './DetailLeft';

import "D:/React/code/geograph/src/components/detail.css"

function CountryDetail() {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    console.log(data);


    let { id } = useParams();
    //console.log(id);

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${id}?fullText=true`)
          .then(response => {
            
            setData(response.data[0]);
            setIsLoading(false);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className='Detail' >
      <DetailLeft className='Detail__Left' data={data} /> 
      <DetailRight className='Detail__Rigth' data={data}/> 
    </div> 
  )
}

export default CountryDetail