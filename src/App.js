import React from "react";
import "./style.css";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

export default function App() {
  return (
    <div>
      <TextField label="login ID" required fullWidth/>
      <TextField label="login Password" type="password" required fullWidth/>
      <TextField label="IP Address" required fullWidth/>
      <TextField label="Port"  required fullWidth/>
      <Checkbox value="remember" color="primary" />
      <Button type="submit">submission</Button>
    </div>
  );
}
