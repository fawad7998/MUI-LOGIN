import * as React from 'react';
import {Grid, Stack} from '@mui/material';
import svg1 from '/assets/static/svg1.svg';
import Signup from '../components/common/signup.jsx';
import Signin from '../components/common/signin.jsx';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
  const [Form, setActiveForm] = useState('Signin');
  // setTimeout(() => {
  //   toast('this is awesome');
  // }, );
  // useEffect(() => {
  //   toast('this is awesom');
  // }, []);
  const toastify = useEffect(() => {
    toast('Successfully copied');
  }, []);

  return (
    <>
      {/* <Changingstate /> */}
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
                You can
                {Form == 'Signin' ? (
                  <button
                    style={{
                      textDecoration: 'none',
                      border: 'none',
                      background: 'white',
                      color: '#1976d2',
                      fontSize: '16px',
                      fontweight: 'bolder',
                    }}
                    onClick={() => setActiveForm('Signup')}
                  >
                    Register Here
                  </button>
                ) : (
                  <button
                    style={{
                      textDecoration: 'none',
                      border: 'none',
                      background: 'white',
                      color: '#1976d2',
                      fontSize: '16px',
                      fontweight: 'bolder',
                    }}
                    onClick={() => setActiveForm('Signin')}
                  >
                    SignIn Here
                  </button>
                )}
              </div>
            </div>

            <img
              style={{
                position: 'relative',
                left: '80px',
                // padding: '20px',
                // margin: '30px',
                height: '370px',
              }}
              src={svg1}
              alt="/"
            />
          </div>
          <Link to="/state">users</Link>
          <button onClick={toastify} className="btn btn-primary">
            toast
          </button>
        </Grid>

        {Form == 'Signin' ? <Signin /> : <Signup />}

        {/* <Signupform /> */}
        {/* <Signin /> */}
        <ToastContainer />
      </Grid>
    </>
  );
};

export default Home;

// img issue
// css file issue
// how to import css file in react ?
