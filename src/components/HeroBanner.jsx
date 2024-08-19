import {Box, Typography, Button} from "@mui/material";
import hbi from "../assets/images/banner.png"
import hbi2 from "../assets/images/banner2.jpg"
import hbi3 from "../assets/images/banner3.jpg"
import hbi4 from "../assets/images/banner4.jpg"
import all from "../assets/images/all.jpg"

const HeroBanner = () => {
  return (
    <Box sx={{ mt: {lg: '212px', xs: '70px'}, ml: {sm: '50px'}}} position="relative" p="20px" display="block" >
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

      <Typography fontWeight={600} color='#FF2625' sx={{ opacity: 0.1, display: {lg: 'block', xs: 'none'}}} fontSize="200px" >Exercise</Typography>

      <img src={all} alt="Hero Banner" className='hero-banner-img' />  
      {/* <div className="grid-container">
      <div className="grid-item item1"><img src={hbi} alt="Item 1" /></div>
      <div className="grid-item item2"><img src={hbi2} alt="Item 2" /></div>
      <div className="grid-item item4"><img src={hbi3} alt="Item 4" /></div>
      <div className="grid-item item6"><img src={hbi4} alt="Item 6" /></div>
    </div> */}
    </Box>
  )
}

export default HeroBanner