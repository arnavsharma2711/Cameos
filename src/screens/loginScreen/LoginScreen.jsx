import React from 'react'
import { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../redux/actions/auth.action'


import './loginScreen.scss'
const LoginScreen = () => {
    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(login())
    } 
    
    const accessToken = useSelector(state=>state.auth.accessToken)
    const navigate = useNavigate();

    useEffect(()=>{
        if(accessToken){
            navigate('/');
        }
    },[accessToken,navigate])

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="" />
                <h1>YouTube Clone</h1>
                <button onClick={handleLogin}><img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="" />&nbsp;&nbsp;Login with Google </button>
                <p>A React.js project made using YouTube Data API</p>
                <p style={{fontSize:'0.85rem',color:'grey'}}>Built & Forged by Arnav Shamra</p>
            </div>
        </div>
    )
}

export default LoginScreen