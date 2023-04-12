import React from 'react'
import './StudentSignIn.css'
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Autocomplete from "@mui/material/Autocomplete";
import { MenuItem, Select, MenuList } from "@material-ui/core";
import { Typography } from '@mui/material';

function FacultySignIn() {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{ height: "360px", overflowY: "auto" }}>
      <h4 className='mhead'>FACULTY SIGN IN</h4>
       <h6 class="please2">Please Login to Continue</h6>
                <br />
               <form>
               <div className="form-group">
                    <h6 className='subheads'>CNIC:</h6>
                    <TextField
              required
              id="filled-basic"
              label="First Name"
              sx={{ m: 1, flex: 1,right: "-42px", top:'48px', width:'50%' , height:'10%'}}
              variant="filled"
              size="small"
            />
                    <h6 className='subheads2'>E-mail ID / GSuite-ID:</h6>
                    <TextField
              required
              id="filled-basic"
              label="e.g. abc123@cloud.neduet.edu.pk"
              sx={{ m: 1, flex: 1,right: "-42px", top:'48px', width:'50%' , height:'10%'}}
              variant="filled"
              size="small"
            />

<h6 className='subheads2'>Faculty:</h6>
<TextField
  style={{
    m: 1, flex: 1,right: "-50px", top:'58px', width:'50%' , height:'10%', marginBottom:'20px'
  }}
  label="Select Faculty"
  select
  size="small"
  variant="filled"
  SelectProps={{
    MenuProps: {
      PaperProps: {
        style: {
          maxHeight: "200px",marginLeft:'72px',
          width: "auto",
        },
      },
    },
  }}
>
  <MenuItem value="option1">Faculty of Civil and Petroleum Engineering (CPL)</MenuItem>
  <MenuItem value="option2">Faculty of Mechanical and Manufacturing Engineering (MME)</MenuItem>
  <MenuItem value="option3">Faculty of Electrical and Computer Engineering (ECE)</MenuItem>
  <MenuItem value="option4">Faculty of Information Sciences and Humanities (ISH)</MenuItem>
  <MenuItem value="option5">Faculty of Chemical & Process Engineering (CPE)</MenuItem>
  <MenuItem value="option6">Faculty of Architecture & Management Sciences (AMS)</MenuItem>
  <MenuItem value="option7">Thar Institute of Engineering, Sciences & Technology (TIEST)</MenuItem>
</TextField>




                    <h6 className='subheads3'>Password:</h6>
                    <FormControl
  sx={{ m: 1, width: "50%", right: "-42px", top:'48px' }}
  variant="filled"
>
  <InputLabel htmlFor="filled-adornment-password" required>
    Password
  </InputLabel>
  <FilledInput
    id="filled-adornment-password"
    sx={{ m: 0, fontSize: "12px" }}
    type={showPassword ? "text" : "password"}
    endAdornment={
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    }
  />
  <Typography
    sx={{
      fontSize: "14px",
      position: "absolute",
      right: "2px",
      top: "55px",
      cursor: "pointer",
      color:'blue'
    }}
  >
    Forgot Password?
  </Typography>
</FormControl>

            
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
  <button type="submit" className='go'>Sign In</button>
  <p style={{ fontSize: "14px", marginTop: "-38px", marginLeft:'120px',marginBottom:'40px' }}>
    Don't have any account? <a href="#">Sign Up</a>
  </p>
</div>

               </form>
    </div>
  )
}

export default FacultySignIn