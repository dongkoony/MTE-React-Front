import React from "react";
import "./style.css";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function App() {
  return (
    <div>
      <TextField label="login ID" required fullWidth name="login ID" autoComplete="login ID" autoFocus sx={{mb:3}} />
      <TextField label="login Password" type="password" required fullWidth name="password" autoComplete="password" sx={{mb:3}} />
      <TextField label="IP Address" required fullWidth name="ip" sx={{mb:3}} />
      <TextField label="Port"  required fullWidth name="port" sx={{mb:3}} />
      <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
      
      <Button type="submit" fullWidth variant="contained" sx={{mt:3}}>submission</Button>
    </div>
  ); 
}
