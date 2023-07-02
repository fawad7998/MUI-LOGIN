import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Grid, Stack} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Signup = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Grid
      item
      lg={'6'}
      md={'6'}
      xs={'12'}
      sx={{margin: '40px auto'}}
      style={{position: 'relative', left: '100px'}}
    >
      <div
        style={{
          fontSize: '20px',
          // paddingTop: '15px',
          paddingLeft: '30px',
          fontWeight: 'bolder',
        }}
      >
        Sign Up
      </div>

      <Box
        component="form"
        sx={{
          paddingLeft: '30px',
          '& > :not(style)': {width: '25ch', top: '25px'},
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Enter Email" variant="outlined" />
      </Box>
      <Box
        component="form"
        sx={{
          paddingLeft: '30px',

          '& > :not(style)': {width: '25ch', top: '35px'},
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Create User name"
          variant="outlined"
        />
      </Box>
      <Box
        component="form"
        sx={{
          paddingLeft: '30px',

          '& > :not(style)': {width: '25ch', top: '45px'},
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Contact number"
          variant="outlined"
        />
      </Box>
      {/* <Box
        component="form"
        sx={{
          paddingLeft: '30px',

          '& > :not(style)': {width: '25ch', top: '55px'},
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Password " variant="outlined" />
      </Box>
      <Box
        component="form"
        sx={{
          paddingLeft: '30px',

          '& > :not(style)': {width: '25ch', top: '65px'},
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Confrim Password"
          variant="outlined"
        />
      </Box> */}
      <Box
        component="form"
        sx={{
          paddingLeft: '22px',
          // marginTop: '5px',

          '& > :not(style)': {width: '25ch', top: '47px'},
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl sx={{m: 1, width: '25ch'}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
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
            label="Password"
          />
        </FormControl>
      </Box>
      <Box
        component="form"
        sx={{
          paddingLeft: '22px',
          // marginTop: '5px',

          '& > :not(style)': {width: '25ch', top: '45px'},
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl sx={{m: 1, width: '25ch'}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Confrim Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
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
            label="Password"
          />
        </FormControl>
      </Box>

      <Button
        style={{
          width: '270px',
          color: '4D47C3',
          position: 'relative',
          top: '70px',
          left: '30px',
          // paddingLeft: '30px',
        }}
        variant="contained"
      >
        Sign Up
      </Button>
    </Grid>
  );
};

export default Signup;

//hide and unhide password in textfield?
