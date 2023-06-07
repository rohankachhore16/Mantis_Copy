import React from 'react'
import { Box } from '@mui/material'
import short from "../../assets/images/shortLogo.png"
const ShortLogo = ({style}) => {
  return (
    <>
     <Box>
      <img src={short} alt="" style={style} />
      </Box> 
    </>
  )
}

export default ShortLogo
