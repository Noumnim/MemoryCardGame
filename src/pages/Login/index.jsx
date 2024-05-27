import React from 'react'
import { Box, Grid, Button, Stack, TextField, useMediaQuery } from '@mui/material';
import topLeft from '../../assets/topLeft.svg'
import topRight from '../../assets/topRight.svg'
import bottomLeft from '../../assets/bottomLeft.svg';
import bottomRight from '../../assets/bottomRight.svg';
import bgLogin from '../../assets/bgLogin.svg';
import UserNameController from './controller';
import { useNavigate } from 'react-router-dom';
function Login() {
  const controller = UserNameController();
  const navigate = useNavigate();
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <div>
      <>
        <Box>
          <Grid xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <img style={{ width: matches ? '200px' : '100px', marginBottom: '20px' }} src={topLeft} alt="background" />
            <img style={{ width: matches ? '200px' : '100px', }} src={topRight} alt="background" />
          </Grid>
          <Grid item >
            <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={bgLogin} alt='icon' /></Grid>
            <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
              <form
                onSubmit={controller.handleSubmit}
              >
                <Stack spacing={1}>
                  <TextField placeholder="Username!" variant="outlined" color="primary" value={controller.username}
                    onChange={controller.handleInputChange} />
                  <Button sx={{
                    borderRadius: '20px', margin: '20px', fontWeight: 'bold',textTransform:'capitalize', padding: '10px', fontSize: '20px', background: '#38B6FF', color: 'white', "&:hover": { backgroundColor: "#1665A4" },
                  }}
                    disabled={controller.username.trim() === ""}
                    variant="contained"
                    type="submit"
                  >Start</Button>
                   <Button sx={{
                    borderRadius: '20px', margin: '20px', fontWeight: 'bold',textTransform:'capitalize', fontSize: '20px', background: '#38B6FF', color: 'white', "&:hover": { backgroundColor: "#1665A4" },
                  }}
                    variant="contained"
                    onClick={() => navigate('/leaderboard')}
                  >LeaderBoard</Button>
                </Stack>
            
              </form>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <img style={{ width: matches ? '300px' : '150px',  position: 'absolute', bottom: 0 }} src={bottomLeft} alt="background" />
            <img style={{ width: matches ? '200px' : '100px', position: 'absolute', bottom: 0, right: 0 }} src={bottomRight} alt="background" />
          </Grid>
        </Box>
      </>
    </div>
  )
};

export default Login;
