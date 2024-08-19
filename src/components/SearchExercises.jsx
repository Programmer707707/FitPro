import { useEffect, useState } from "react";
import {Button, Stack, TextField, Box, Typography} from "@mui/material";
import { options, fetchData } from "../utils/fetchData";
import HoriontalScrollbar from "./HoriontalScrollbar";

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState(''); 
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(()=>{
    const fetchExercisesData = async () => {
      const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options);
      setBodyParts(['all', ...bodyPartData])
    }

    fetchExercisesData();
  }, [])


  const handleSearch = async () => {
    if(search){
      const data = await fetchData('https://exercisedb.p.rapidapi.com/exercises', options);
      const searchedExercises = data.filter(e => e.name.toLowerCase().includes(search) 
      || e.target.toLowerCase().includes(search) || e.equipment.toLowerCase().includes(search)
      || e.bodyPart.toLowerCase().includes(search));

      setSearch('');
      setExercises(searchedExercises);
    }
  }

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight={700} sx={{ fontSize: {lg: '44px', xs: '30px'}}} mb='50px' textAlign='center' >
          Awesome Exercises You <br/> Should know
      </Typography>

      <Box position='relative' mb={'72px'}>
        <TextField 
          sx={{ 
            input: 
            {fontWeight: '700', border: 'none', borderRadius: '4px'},
            width: {lg: '900px', xs: '350px'},
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          height='76px' value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase())} placeholder="SearchExercises" type="text"/>

          <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', transform: 'none',  width: {lg: '135px', xs: '80px'}, fontSize: {lg: '20px', xs: '14px'}, height: '55px', position: 'absolute', right: '0' }} 
            onClick={handleSearch}
            >Search</Button>

      </Box> 
      {/* <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HoriontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box> */}
      

    </Stack>
  )
}

export default SearchExercises