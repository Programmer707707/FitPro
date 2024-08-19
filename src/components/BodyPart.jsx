import React from 'react'
import {Stack, Typography} from "@mui/material"
import Icon from "../assets/icons/gym.png"

const BodyPart = ({item ,setBodyPart, bodyPart}) => {
  return (
    <Stack type="button" alignItems='center' justifyContent='center' className='bodyPart-card' 
        sx= {{ borderTop: bodyPart === item ? '4px solid #ff2625' : '', backgroundColor: '#fff', borderBottomLeftRadius: '20px', width:'240px', height:'240px', cursor: 'pointer', gap: '47px' }} >
        <img src={Icon} alt='dumbbell' style={{ width: '60px', height: '60px'}} />
    </Stack>
  )
}

export default BodyPart