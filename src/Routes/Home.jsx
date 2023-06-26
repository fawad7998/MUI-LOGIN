import React from 'react';
import {Grid, Stack} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import svg1 from '../assets/static/svg1.svg';
import Group from '../assets/static/Group.png';
import Button from '@mui/material/Button';
import {blue} from '@mui/material/colors';
const Home = () => {
  return (
    <>
      <div
        style={{
          fontfamily: 'Poppins',
          fontsize: '20px',
          fontweight: '600',
          lineheight: '30px',
          letterspacing: '0em',
          textalign: 'left',
          position: 'relative',
          top: '20px',
          left: '40px',
        }}
      >
        Your Logo
      </div>
      <Grid container maxWidth={'lg'}>
        <Grid item lg={'6'} md={'6'} xs={'12'} sx={{margin: '150px 0 0'}}>
          <div
            style={{
              position: 'relative',
              left: '180px',
              fontSize: '30px',
              fontWeight: 'bold',
            }}
          >
            Sign in to
          </div>
          <div
            style={{
              position: 'relative',
              left: '180px',
              fontSize: '20px',
              paddingTop: '15px',
              fontWeight: 'bolder',
            }}
          >
            Lorem, ipsum dolor sit
          </div>
          <div style={{display: 'flex'}}>
            <div
              style={{
                position: 'relative',
                left: '180px',
                fontSize: '14px',
                paddingTop: '20px',
              }}
            >
              If you don’t have an account register
              <div
                style={
                  {
                    // position: 'relative',
                    // left: '150px',
                    // fontSize: '20px',
                    // paddingTop: '20px',
                  }
                }
              >
                You can{' '}
                <a
                  style={{
                    textDecoration: 'none',
                    color: '#1976d2',
                    fontSize: '16px',
                    fontweight: 'bolder',
                  }}
                  href="/"
                >
                  Register here !
                </a>
              </div>
            </div>

            <img
              style={{
                position: 'relative',
                left: '80px',
                // padding: '20px',
                // margin: '30px',
                height: '400px',
              }}
              src={svg1}
              alt="/"
            />
          </div>
        </Grid>

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
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
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
          <img
            style={{
              // fontSize: '14px',
              height: '35px',
              paddingTop: '20px',
              paddingLeft: '90px',
            }}
            src={Group}
            alt="/"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
