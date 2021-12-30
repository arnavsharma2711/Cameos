import React from 'react'

import './sidebar.scss'

import {  MdSubscriptions,MdThumbUp,MdHome, MdLibraryMusic, MdLocalMovies, MdTravelExplore, MdPalette, MdLogout, MdSportsEsports, MdSportsVolleyball } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { log_out } from '../../redux/actions/auth.action'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action'

const Sidebar = ({sidebar, handleToggleSidebar, homeScreen}) => {
   const dispatch = useDispatch()

   const logOutHandler = () =>{
      dispatch(log_out())
   }

   const accessToken = useSelector(state=>state.auth.accessToken)
   const navigate = useNavigate();

    useEffect(()=>{
        if(!accessToken){
            navigate('/auth');
        }
    },[accessToken,navigate])

    const handleClick = value => {
       if (value === 'All')
       dispatch(getPopularVideos())
      else
         dispatch(getVideosByCategory(value))
     }

    return (
        homeScreen ? (<nav className={sidebar ? 'sidebar open' : 'sidebar'}
        onClick={() => handleToggleSidebar(false)}>
         <Link to='/'>
            <li onClick={() => handleClick("All")}>
               <MdHome size={23} />
               <span>Home</span>
            </li>
         </Link>
         <Link to='/feed/subscriptions'>
         <li>
            <MdSubscriptions size={23} />
            <span>Subscriptions</span>
         </li>
         </Link>

         <Link to='/feed/liked'>
         <li>
            <MdThumbUp size={23} />
            <span>Liked Video</span>
         </li>
         </Link>

         <hr style={{marginTop: '10px',marginBottom: '10px'}}/>

         <li onClick={() => handleClick("Music")}>
            <MdLibraryMusic size={23} />
            <span>Music</span>
         </li>

         <li onClick={() => handleClick("Sports")}>
            <MdSportsVolleyball size={23} />
            <span>Sports</span>
         </li>

         <li onClick={() => handleClick("Gaming")}>
            <MdSportsEsports size={23} />
            <span>Gaming</span>
         </li>

         <li onClick={() => handleClick("Movies")}>
            <MdLocalMovies size={23} />
            <span>Movies</span>
         </li>

         <li onClick={() => handleClick("Travel")}>
            <MdTravelExplore size={23} />
            <span>Travel</span>
         </li>

         <li onClick={() => handleClick("Art")}>
            <MdPalette size={23} />
            <span>Art</span>
         </li>

         <hr style={{marginTop: '10px'}}/>

         <li onClick={logOutHandler}>
            <MdLogout size={23} />
            <span>Log Out</span>
         </li>

         <hr />
      </nav>)
      :
      (<nav className={sidebar ? 'sidebar open' : 'sidebar'}
      onClick={() => handleToggleSidebar(false)}>
       <Link to='/'>
          <li onClick={() => handleClick("All")}>
             <MdHome size={23} />
             <span>Home</span>
          </li>
       </Link>
       <Link to='/feed/subscriptions'>
       <li>
          <MdSubscriptions size={23} />
          <span>Subscriptions</span>
       </li>
       </Link>

       <Link to='/feed/liked'>
       <li>
          <MdThumbUp size={23} />
          <span>Liked Video</span>
       </li>
       </Link>

       <hr style={{marginTop: '10px',marginBottom: '10px'}}/>
       <Link to='/popular/Music'>
       <li onClick={() => handleClick("Music")}>
          <MdLibraryMusic size={23} />
          <span>Music</span>
       </li>
      </Link>
      <Link to='/popular/Sports'>
       <li onClick={() => handleClick("Sports")}>
          <MdSportsVolleyball size={23} />
          <span>Sports</span>
       </li>
       </Link>

       <Link to='/popular/Gaming'>
       <li onClick={() => handleClick("Gaming")}>
          <MdSportsEsports size={23} />
          <span>Gaming</span>
       </li>
      </Link>

      <Link to='/popular/Movies'>      
       <li onClick={() => handleClick("Movies")}>
          <MdLocalMovies size={23} />
          <span>Movies</span>
       </li>
       </Link>

       <Link to='/popular/Travel'>
       <li onClick={() => handleClick("Travel")}>
          <MdTravelExplore size={23} />
          <span>Travel</span>
       </li>
       </Link>

       <Link to='/popular/Art'>
       <li onClick={() => handleClick("Art")}>
          <MdPalette size={23} />
          <span>Art</span>
       </li>
      </Link>
       <hr style={{marginTop: '10px'}}/>

       <li onClick={logOutHandler}>
          <MdLogout size={23} />
          <span>Log Out</span>
       </li>

       <hr />
    </nav>)
   )
}

export default Sidebar;