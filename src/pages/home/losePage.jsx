import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react'
import lose from '../../assets/lose.svg'
import { useNavigate } from 'react-router-dom';
function LosePage() {
  const navigate = useNavigate();
  const handlePlayAgain = () =>{
    navigate('/');
  }
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Box>
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <Typography sx={{ fontSize: '60px', fontWeight: 'bold', color: '#18618B' }}>You lose!</Typography>
        </Grid>
        <Grid sx={{ margin: '10px', marginTop: '50px', }}>

          <Button sx={{
            borderRadius: '20px', fontWeight: 'bold', padding: '10px',textTransform:'capitalize', fontSize: '25px', background: '#38B6FF', color: 'white', "&:hover": { backgroundColor: "#1665A4", },
          }}
          onClick={handlePlayAgain}
            variant="contained"
          >Play again</Button>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <img style={{width:matches?'900px':'300px', position: 'absolute', bottom: 0, }} src={lose} alt='lose page' />
        </Grid>
      </Grid>
    </Box>
  )
}

export default LosePage;
