import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';
export default function Navbar() {
  const {toggle,darkMode} =useContext(DarkModeContext);
  const {currentUser}=useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{textDecoration:"none"}}>
            <span>BackBook</span>
        </Link>
        <HomeOutlinedIcon style={{cursor:"pointer"}}/>
        {darkMode ?  
        <WbSunnyOutlinedIcon onClick={toggle} style={{cursor:"pointer"}}/>:   <DarkModeOutlinedIcon onClick={toggle} style={{cursor:"pointer"}}/>}
        <GridViewOutlinedIcon/>
        <div className="search">
            <SearchOutlinedIcon style={{cursor:"pointer"}}/>
            <input type="text" placeholder='Search...'/>
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon style={{cursor:"pointer"}}/>
        <EmailOutlinedIcon style={{cursor:"pointer"}}/>
        <NotificationsNoneOutlinedIcon style={{cursor:"pointer"}}/>
        <div className="user">
            <img src={currentUser.profilePicture} alt="" />
            <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}
