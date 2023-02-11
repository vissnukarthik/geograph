import React from 'react'
import { useEffect,useState } from 'react';
import { Link } from "react-router-dom"

import axios from 'axios';
//https://restcountries.com/v2/all

function Main() {

const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log(data);

  return (
    <div>
        {
            data.map( country => (
                <div key={country.numericCode} >
                    <h3>
                    <Link to={`/country/${country.name}`}>{country.name}</Link>
                    </h3>
                    
                </div>
            ) )
        }
    </div>
  )
}

export default Main