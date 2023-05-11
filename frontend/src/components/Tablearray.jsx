import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'

const Tablearray = () => {
  var[name,setName] = useState(["Akshay","Ijaz","Lino","Akarsh"])

  return (
    <div>
        <Typography variant="h3">Table Array</Typography>
        <TableContainer sx={{maxWidth:650}}>
            <Table>
            <TableHead>
                <TableRow>
                    <TableCell  color="grey" >Name</TableCell>
                    <TableCell  color="gery" >Age</TableCell>
                </TableRow>
              </TableHead>
                <TableBody>
                  {
                    name.map((name,index)=>{
                      <TableRow key={index}>
                        <TableCell>{name}</TableCell>
                      </TableRow>
                    })
                  }
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Tablearray