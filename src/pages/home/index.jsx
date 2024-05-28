import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react'
import homePoint from '../../assets/homePoint.svg'
import homeDo from "../../assets/homeDo.svg"
import SingleCards from '../component/SingleCards';
import MemoryCardController from '../component/controller';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  const controllers = MemoryCardController();
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Box >
      <Grid style={{ position: 'relative', display: 'flex', justifyContent: 'end', color: 'white' }}>
        <img style={{ width: '110px' }} src={homePoint} alt="homePoint" />
        <Typography style={{ position: 'absolute', top: '30px', right: '30px', fontWeight: 'bold' }}>
          Moves:{controllers.turns}
        </Typography>
        <Typography style={{ position: 'absolute', top: '50px', right: '10px', fontWeight: 'bold' }}>
          Time:{controllers.minutes < 10 ? `0${controllers.minutes}` : controllers.minutes}:{controllers.seconds < 10 ? `0${controllers.seconds}` : controllers.seconds}
        </Typography>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',alignContent:'center',marginTop:matches?'0px':'60px'}}>
            <Grid container spacing={2} sx={{ width: '90%', maxWidth: '500px',display:'flex'}}>
                {controllers.cards.map((card) => (
                    <Grid item xs={3} key={card.id}>
                        <SingleCards card={card} handleChoice={controllers.handleChoice} />
                    </Grid>
                ))}
            </Grid>
        </Box>
      <Grid sx={{ display: 'flex', justifyContent: 'center', bottom: 0 }}>
        <Button sx={{
          borderRadius: '20px', width: '100px', margin: '20px', fontWeight: 'bold', padding: '10px', fontSize: '20px', background: '#38B6FF', color: 'white', "&:hover": { backgroundColor: "#1665A4" },
        }}
          onClick={() => {
            navigate('/lose');
          }}
          variant="contained"
        >Stop</Button>
      </Grid>
      <Grid sx={{ position: 'absolute', bottom: 0, left: 0 }}>
        <img style={{ width: '150px' }} src={homeDo} alt="homeDo" />
      </Grid>
      <Grid>

      </Grid>
    </Box>
  )
}

export default Home;