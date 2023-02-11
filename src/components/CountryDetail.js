import React from 'react'
import {useParams } from "react-router-dom";
import { useEffect,useState } from 'react';
import axios from 'axios';


function CountryDetail() {

    const [data, setData] = useState();

    let { id } = useParams();
    console.log(id);

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${id}?fullText=true`)
          .then(response => {
            setData(response.data[0]);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
      console.log(data);
    
  return (
    <div>CountryDetail</div>
  )
}

export default CountryDetail