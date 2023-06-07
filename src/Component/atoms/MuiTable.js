import MUIDataTable from 'mui-datatables'
import React from 'react'

const MuiTableAtoms = ({data,columns,options,title}) => {
  return (
    <>
       <MUIDataTable
        title={title}
        data={data}
        columns={columns}
        options={options}
      />
    </>
  )
}

export default MuiTableAtoms
