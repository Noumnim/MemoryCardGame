import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../pages/home';
import Login from '../pages/Login';
import WinPage from '../pages/home/winPage';
import LosePage from '../pages/home/losePage';
import LeaderBoard from '../pages/leaderboard';

const RoutesComponent= () =>{
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/play" element={<Home/>} />
      <Route path="/win" element={<WinPage/>}/>
      <Route path="/lose" element={<LosePage/>}/>
      <Route path="/leaderboard" element={<LeaderBoard/>}/>

    </Routes>
  )
}
export default RoutesComponent;

