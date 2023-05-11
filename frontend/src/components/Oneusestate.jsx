import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Oneusestate = () => {

    var[ val,setVal ] = useState({id:'',age:'',address:''});
    const inputHandler =(e)=>{
        const{name,value} = e.target;
        setVal((val)=>({...val,[name]:value}))
    }

  return (
    <div>
        <Typography variant="h3">Login</Typography><br /><br />

        <TextField label="id" name="id"  variant="filled" value={val.id} onChange={inputHandler}></TextField><br /><br />
        <h3>{val.id}</h3> <br /><br />
        <TextField label="age" name="age" variant="filled" value={val.age} onChange={inputHandler}></TextField><br /> <br />
       <h3> {val.age} </h3> <br />
       <TextField label="address" name="address" variant="filled" value={val.address} onChange={inputHandler}></TextField><br /> <br />
       <h3> {val.address} </h3> <br />
    </div>
  )
}

export default Oneusestate