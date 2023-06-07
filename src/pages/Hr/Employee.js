import MainCard from 'Component/MainCard'
import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import EmployeTable from './EmployeTable/index'
const Employee = () => {
  return (
    <>
         {/* <MainCard  elevation={0} border={true} content={true}> */}
        <Box>
   
          <EmployeTable/>
        </Box>
      {/* </MainCard> */}
          </>
     
  )
}

export default Employee
