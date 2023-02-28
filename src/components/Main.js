import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MapCountry from './MapCountry';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Main() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const filteredData = data.filter((country) => {
    return country.name.toLowerCase().includes(searchText.toLowerCase());
  });

  const sortDataByPopulation = () => {
    const sortedData = [...filteredData].sort((a, b) => b.population - a.population);
    setData(sortedData);
  };

  const sortByAlphabet = () => {
    const sortedData = filteredData.sort((a, b) => {
      if (a.name < b.name) return 0;
      if (a.name > b.name)    return 1; 
    });
    setData(sortedData);
  };

  return (
    <div>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
        <TextField id="standard-basic" label="country" variant="standard"  type="text" placeholder="Search" value={searchText} onChange={handleSearch} />
        <Button variant="contained" onClick={sortDataByPopulation}>Sort by population</Button>
        <Button variant="contained" onClick={sortByAlphabet}>Sort by name</Button>
      </Stack>
      <MapCountry data={filteredData} />
    </div>
  );
}

export default Main;
