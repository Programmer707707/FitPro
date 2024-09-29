import {Box, Typography, Button} from "@mui/material";
import all from "../assets/images/all.jpg"

const HeroBanner = () => {
  return (
    <Box sx={{ mt: {lg: '212px', xs: '70px'}, ml: {sm: '50px'}}}  p="20px" display="flex" className="hero-banner" justifyContent={'space-between'} >
      <Box className="hero-text">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>

      <Typography fontWeight={700} sx={{ fontSize: {lg: '44px', xs: '40px'}}} mb='23px' mt='30px' >
        Sweat, Smile <br/> and Repeat
      </Typography>

      <Typography fontSize='22px' lineHeight='35px' mb={4} >
        Check out the most effective exercises
      </Typography>

      <Button variant='contained' color='error' href='#exercises' sx={{ backgroundColor: '#ff2625', padding: '10px'}} >Explore Exercises</Button>

      </Box>

      <img src={all} alt="Hero Banner" className='hero-banner-img' />  
    </Box>
  )
}

export default HeroBanner