import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Grid, Stack} from '@mui/material';

// import Group from '../assets';

const Signin = () => {
  return (
    <Grid
      item
      lg={'6'}
      md={'6'}
      xs={'12'}
      sx={{margin: '120px auto'}}
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
        Sign in
      </div>

      <Box
        component="form"
        sx={{
          paddingLeft: '30px',
          '& > :not(style)': {width: '25ch', top: '10px'},
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Enter email or user name"
          variant="outlined"
        />
      </Box>
      <Box
        component="form"
        sx={{
          paddingLeft: '30px',

          '& > :not(style)': {width: '25ch', top: '40px'},
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Password" variant="outlined" />
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
        Sign In
      </Button>
      <div
        style={{
          fontSize: '14px',
          paddingTop: '80px',
          paddingLeft: '100px',
          // fontWeight: 'bolder',
          // display: 'flex',
          // right: '60px',
          // float: 'right',
          // top: '400px',
        }}
      >
        or continue with
      </div>
      <a href="">
        <img
          style={{
            // fontSize: '14px',
            height: '35px',
            paddingTop: '20px',
            paddingLeft: '90px',
          }}
          src=""
          alt="/"
        />
      </a>
    </Grid>
  );
};

export default Signin;
