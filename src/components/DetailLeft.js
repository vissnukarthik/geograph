import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

function DetailLeft({ data }) {
  const [bank, setBank] = useState(null);

  useEffect(() => {
    axios.get(`https://api.worldbank.org/v2/country/${data.cca2}?format=json`)
      .then((res) => {
        setBank(res.data[1][0]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const populationInMillions = (data.population / 1000000).toFixed(2);

  return (
    <div className='Left'>
      <Card sx={{ maxWidth: 370 }}>
        <CardMedia
          component="img"
          height="190"
          image={data.flags.png}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {data.flags.alt}
          </Typography>
          {bank && (
            <Typography style={{color:"#727574"}} gutterBottom variant="h5" component="div">
              <h4>Income: {bank.incomeLevel.value}</h4>
            </Typography>
          )}
          <Typography style={{color:"#727574"}}  gutterBottom variant="h5" component="div">
            <h4>Name: {data.name.common} </h4>
          </Typography>
          <Typography style={{color:"#727574"}}  gutterBottom variant="h5" component="div">
            <h4>Continent: {data.continents} </h4>
          </Typography>
          <div>
            <Typography style={{color:"#727574"}}  gutterBottom variant="h5" component="div">
              <h4>Population: {populationInMillions} million</h4>
            </Typography>
          </div>
        </CardContent>
        {/* <CardActions>
          <Button size="small">GO TO MAP</Button>   
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </div>
  )
}

export default DetailLeft;
