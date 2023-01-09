import React from "react";
import "../style.css";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


export default function App() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
            Move To EC2
          </Typography>
      <TextField label="login ID" required fullWidth name="login ID" autoComplete="login ID" autoFocus sx={{mb:3, mt:2}} />
      <TextField label="login Password" type="password" required fullWidth name="password" autoComplete="password" sx={{mb:3}} />
      <TextField label="IP Address" required fullWidth name="ip" sx={{mb:3}} />
      <TextField label="Port"  required fullWidth name="port" sx={{mb:3}} />
      <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" sx={{mt:3}} />
      <Button type="submit" fullWidth variant="contained" sx={{mt:3}}>submission</Button>
      </Box>
    </Container>
    
  ); 
}
