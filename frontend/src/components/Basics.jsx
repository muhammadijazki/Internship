import { Button,TextField, Typography } from '@mui/material'
import React from 'react'

const Basics = () => {
  return (
    <div>
        <Typography variant="h3" color="black" >My site </Typography>
        <br />
        <br />
        <TextField label="name" variant="standard" ></TextField>
        <br /><br />
        <TextField label="dob" variant="outlined" ></TextField><br /><br />
        <TextField label="address" variant="filled" ></TextField><br /><br />
        
        <Button variant="contained" component="label">
  Upload  
  <input hidden accept="image/*" multiple type="file" />
</Button><br /><br />


        <Button variant="contained" color="success" >submit</Button>
        <Button variant="contained" color="secondary" >Back</Button><br /><br />
        <Button variant="outlined" disabled>Home page</Button><br /><br />
        


    </div>
  )
}

export default Basics