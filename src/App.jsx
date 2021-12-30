import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'
import WatchScreen from './screens/watchScreen/WatchScreen'
import SearchScreen from './screens/searchScreen/SearchScreen'
import SubscriptionsScreen from './screens/subscriptionsScreen/SubscriptionsScreen'
import ChannelScreen from './screens/channelScreen/ChannelScreen'
import LikedVideoScreen from './screens/likedVideoScreen/LikedVideoScreen'

import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'

import './_app.scss'
import { useSelector } from 'react-redux'


const Layout = ({children,homeScreen}) =>{
  const [sidebar, toggleSidebar] = useState(false);
  
  const handleToggleSidebar = () => toggleSidebar(value => !value)
  return(
  <>
    <Header handleToggleSidebar = {handleToggleSidebar}/>
    <div className="app__container">
      <Sidebar sidebar={sidebar} handleToggleSidebar = {handleToggleSidebar} homeScreen={homeScreen}/>
      <Container fluid className='app_main'>
        {children}
      </Container>
    </div>
  </>
  )
}

const App = () => {

  const {accessToken,loading} = useSelector(state=>state.auth)

  const navigate = useNavigate();

  useEffect(()=>{
    if(!loading && !accessToken){
        navigate('/auth');
    }
},[accessToken,navigate,loading])

  return (
      <Routes>        
        <Route path='/' exact  element={<Layout homeScreen><HomeScreen/></Layout>}/>
        <Route path='/popular/:fetch' exact  element={<Layout><HomeScreen/></Layout>}/>
        <Route path='/auth' exact  element={<LoginScreen/>}/>
        <Route path='/search/:query' exact  element={<Layout><SearchScreen/></Layout>}/>
        <Route path='/watch/:id' exact  element={<Layout><WatchScreen/></Layout>}/>
        <Route path='/feed/subscriptions' exact  element={<Layout><SubscriptionsScreen/></Layout>}/>
        <Route path='/channel/:channelid' exact  element={<Layout><ChannelScreen/></Layout>}/>
        <Route path='/feed/liked' exact  element={<Layout><LikedVideoScreen/></Layout>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
 )
}

export default App
