import React,{useState} from 'react';
import PasswordStrengthMeter from '../src/Password checker/PasswordStrengthMeter';

import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Autocomplete from "@mui/material/Autocomplete";
import { Margin } from '@mui/icons-material';

const App = () => {
  const [userInfo, setuserInfo] = useState({
    password: '',
  });


  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [isError, setError] = useState(null);
  const handleChangePassword = (e) => {
    let password  = e.target.value;
    setuserInfo({
      ...userInfo,
      password:e.target.value
    });
    setError(null);
    let capsCount, smallCount, numberCount, symbolCount
    if (password.length < 4) {
      setError("Password must be minimum 4 characters include one UPPERCASE, lowercase, number and special character: @$! % * ? &", { marginLeft: '110px' });
      return;
    } else {
      capsCount = (password.match(/[A-Z]/g) || []).length;
      smallCount = (password.match(/[a-z]/g) || []).length;
      numberCount = (password.match(/[0-9]/g) || []).length;
      symbolCount = (password.match(/\W/g) || []).length;
      if (capsCount < 1) {
        setError("Must contain one UPPERCASE letter", { marginLeft: '110px' });
        return;
      } else if (smallCount < 1) {
        setError("Must contain one lowercase letter", { marginLeft: '110px' });
        return;
      } else if (numberCount < 1) {
        setError("Must contain one number", { marginLeft: '110px' });
        return;
      } else if (symbolCount < 1) {
        setError("Must contain one special character: @$! % * ? &", { marginLeft: '110px' });
        return;
    
      }
    }
  }
  
  const [isStrength, setStrength] = useState(null);
  const dataHandler = async (childData) => {
    setStrength(childData);
  }

  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      event.persist();
      console.log(userInfo.password);
    } catch (error) { throw error;} 
  };

  return (
    <div className="App">
    <h1 style={{ marginLeft: '110px' }}>Password Strength Checker in React</h1>

      <div className="wrapper">
        <form onSubmit={onSubmit} className="login__Form">
          <label htmlFor="password">
            {isError !== null && (
              <p className="errors"> - {isError}</p>
            )}
          </label>
         <FormControl
              sx={{ m: 1, width: "30%", right: "-100px" }}
              variant="filled"
            >
              <InputLabel htmlFor="filled-adornment-password" required>
                Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                sx={{ m: 0, fontSize: "12px" }}
                size="small"
                type={showPassword ? "text" : "password"}
                onChange={handleChangePassword}
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
            </FormControl>
          <PasswordStrengthMeter password={userInfo.password} actions={dataHandler}/>
        </form>
      </div>
    </div>
  )
}
export default App