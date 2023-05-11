import { Button,TextField,Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var[ Pname,setPname ] = useState("Ijaz");
    var[ data,setData ] = useState()
    const changeName = () => {
        console.log("clicked");
        setPname(data);
        
        
        
    }
        const readValue = (e) => {
            setData(e.target.value)
            console.log(data);
        }
     return (
    <div>
        <Typography variant='h1'>Welcome {Pname}</Typography><br /><br />
        <TextField label="name" variant="outlined" onChange={readValue} ></TextField><br /><br />
        <Button variant="contained" onClick={changeName} >Change</Button>
        <br />
        
    </div>
  )
}

export default StateBasics