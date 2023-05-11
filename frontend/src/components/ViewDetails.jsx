import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewDetails = () => {
    var[user,setUser]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
        console.log(response.data);
        setUser(response.data)
    })
    },[])
    
  return (
    <div>
        <TableContainer sx={{maxWidth:650}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        user.map((value,index)=>{
                            return(
                                <TableRow key={index}>
                                    <TableCell>{value.name}</TableCell>
                                    <TableCell>{value.email}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default ViewDetails