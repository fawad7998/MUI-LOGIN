import React from 'react';
import {Grid, Stack} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Nav from '../Components/LoginPageItems/nav';
import LogoIcon from '../static/Icon';

export default function LoginPage() {
  return (
    <>
      <Nav />
      {/* <section style={{display: 'flex'}}>
        <div
          style={{
            position: 'relative',
            width: '129px',
            height: '664px',
            top: '194px',
            left: '175px',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '231px',
              height: ' 75px',
              top: '20px',
              left: '50px',
              fontfamily: 'Poppins;',
              fontSize: '50px;',
              fontweight: ' 600;',
              lineheight: '75px;',
              letterspacing: ' 0em;',
              textalign: 'left;',
            }}
          >
            Sign in to
          </div>
        </div>
        <div
          style={{
            position: 'relative',
            width: '369p",x',
            height: '543.1156005859375px',
            top: ' 174px',
            left: ' 892px',
            borderRadius: ' 8px',
          }}
        >
          2
        </div>
      </section> */}
      <Grid container maxWidth={'lg'}>
        <Grid item lg={'6'} md={'6'} xs={'12'} sx={{margin: '180px auto'}}>
          <div
            style={{
              position: 'relative',
              left: '175px',
              fontSize: '50px',
              fontWeight: 'bold',
            }}
          >
            Sign in to
          </div>
          <div
            style={{
              position: 'relative',
              left: '175px',
              fontSize: '20px',
              paddingTop: '15px',
              fontWeight: 'bolder',
            }}
          >
            Lorem, ipsum dolor sit
          </div>
          <div
            style={{
              position: 'relative',
              left: '175px',
              fontSize: '20px',
              paddingTop: '5px',
            }}
          >
            If you don’t have an account register
          </div>
          <div style={{display: 'flex'}}>
            <div
              style={{
                position: 'relative',
                left: '175px',
                fontSize: '20px',
                paddingTop: '20px',
              }}
            >
              You can Register here !
            </div>
            {/* <LogoIcon /> */}
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
              paddingTop: '15px',
              fontWeight: 'bolder',
            }}
          >
            Sign in
          </div>

          <Box
            component="form"
            sx={{
              '& > :not(style)': {width: '25ch', top: '10px', color: 'A7A3FF'},
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
        </Grid>
      </Grid>
    </>
  );
}
