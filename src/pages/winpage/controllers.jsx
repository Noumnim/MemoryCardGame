import { useLocation, useNavigate } from 'react-router-dom';


function Controllers() {
    const navigate = useNavigate();
    const location = useLocation();

    const { moves, time, username } = location.state || { moves: 0, time: { minutes: 0, seconds: 0 }, username:'Guest' };

    const handlePlayAgain = () => {
        navigate('/');
    };

  return {
    handlePlayAgain,
    moves,
    time,
    username,
  }
}

export default Controllers
