import React from 'react'
import { useEffect ,useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./detail.css"
import { border } from '@mui/system';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  // console.log(Object.values(data.languages));
      
   //console.log( data.borders)
  // console.log(data.timezones[0])
function DetailRight({data}) {

const [flags, setFlags] = useState(); 


const [isLoading, setIsLoading] = useState(true);
const[count,setCount] = useState(0);
//console.log(data.borders.length);
let condition = 1;
if(!Array.isArray(data.borders)) condition = 0;
if (Array.isArray(data.borders) && count === data.borders.length * 2) condition = 0;
console.log(condition);

  const fetchData = async (id) => {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
    const data = await response.json();
    await setCount( (count) => count+1 )
    return data[0].flags.png;
  }

  useEffect(() => {
    const fetchDataForAllIds = async () => {
      const ids = data.borders; // Example array of IDs
      const dataPromises = ids.map(id => fetchData(id));
      const fetchedData = await Promise.all(dataPromises);
    //   setCount((count) => count+1 )
      setFlags(fetchedData);
    }
    fetchDataForAllIds();
  }, []);

  var flagStyle = {
    margin: 'block',
    borderRadius:"2px",
    width: '50px',
    height: '30px',
    paddingLeft: '10px'
  }

  
// console.log(data.gini[Object.keys(data.gini)[0]])
if (condition) {
    return <p>Loading...</p>;
}
  return (
 
    <div className='Rigth'>
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}>
            <Grid item xs={18}>
            <Item className='card'>
                <div  className='MapItem'>
                    <h2>official Name</h2>
                    <h2>{data.name.official}</h2>
                </div>
            </Item>
            </Grid>

            <Grid item xs={18}>
            <Item className='card'>
                <div  className='MapItem'>
                    <h2>capital</h2>
                    <h2>{data.capital[0]}</h2>
                </div>
            </Item>
            </Grid>


            <Grid item xs={18}>
            <Item className='card'>
                <div  className='MapItem'>
                    <h2>currency</h2>
                    <h2>{data.currencies && data.currencies[0] && data.currencies[0].name ? Object.values(data.currencies)[0].name : "null"}</h2>
                </div>
            </Item>
            </Grid>

            <Grid item xs={18}>
            <Item className='card'>
                <div  className='MapItem'>
                    <h2>languages</h2>

                    <h2 className='multiple'>
                {Object.values(data.languages).map((lang) => (
                  <p key={lang} style={{ paddingLeft: "7px" }}>
                    {lang}
                  </p>
                ))}
              </h2>


                </div>
            </Item> 
            </Grid>

            <Grid item xs={18}>
            <Item className='card'>
                <div  className='MapItem'>
                    <h2>Gini</h2>
                    <h2>{data.gini ? data.gini[Object.keys(data.gini)[0]] : null}</h2>
                </div>
            </Item>
            </Grid>

            <Grid item xs={18}>
            <Item className='card'>
                <div  className='MapItem'>
                    <h2>Neibhour</h2>
                    <h2  className='multiple' >
                    {flags && flags.map((flag) => ( <img key={Math.random()} style={flagStyle} src={flag} alt="" />))}
                    </h2>
                </div>
            </Item>
            </Grid>

        </Grid>
    </Box>
    </div>
  )
}

export default DetailRight