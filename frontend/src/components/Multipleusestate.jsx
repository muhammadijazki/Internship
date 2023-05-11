import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Multipleusestate = () => {

    var[ data,setData ] = useState();
    var[ data1,setData1 ] = useState();
    const changeItems = (e) => {
        setData(e.target.value);
        console.log(data);
    }
    const changeItems1 = (e) => {
        setData1(e.target.value);
        console.log(data);
    }

  return (
    <div>
        <Typography variant="h2" >typing....</Typography><br />
        <TextField label="name" variant="filled" onChange={changeItems} ></TextField><br /><br />
        {data} <br /><br />
        <TextField label="age" variant="filled"  onChange={changeItems1}></TextField><br /><br />
        {data1}
        <br /><br />
        
    </div>
  )
}

export default Multipleusestate