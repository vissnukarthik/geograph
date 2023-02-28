import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useMediaQuery } from 'react-responsive';


import "./common.css"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function MapCountry({ data }) {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const itemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const isMobileMid = useMediaQuery({ query: '(min-width: 400px)' });

  return (
    <div style={containerStyle}>
      <Box display="grid" gridTemplateColumns={`repeat(${isMobileMid ? 12 : 5}, 1fr)`} gap={2}>
        {data.map((country) => (
          <Box gridColumn={isMobileMid ? 'span 4' : 'span 5'} key={country.numericCode}>
            <h3 className="card">
              <Link style={{ textDecoration: 'none' }} to={`/country/${country.name}`}>
                <Item style={itemStyle}>
                  <img style={{ margin: 'block', borderRadius: '2px', width: '55px', height: '30px' }} src={country.flag} alt="" />
                  <h4>{country.name}</h4>
                </Item>
              </Link>
            </h3>
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default MapCountry;
