import React, { useState } from 'react'

import './header.scss'

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Header = ({handleToggleSidebar}) => {
    const [input, setInput] = useState('')

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        navigate(`/search/${input}`)
    }
    const user = useSelector(state => state.auth?.user)

    return (
        <div className='header'>
            <FaBars className='header__menu' size={26}
            onClick={() => handleToggleSidebar()}/>
            <img src='https://cdn-icons-png.flaticon.com/512/1384/1384060.png' alt='YouTube' className='header__logo' />
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Search...' value={input} onChange={e => setInput(e.target.value)}/>
                <button>
                    <AiOutlineSearch size={22}/>
                </button>
            </form>

            <div className="header__icons">
                <MdNotifications size={28}/>
                <MdApps size={28}/>
                <img src={user?.photoURL ? user?.photoURL : `https://cdn-icons-png.flaticon.com/512/149/149071.png`} alt="Avatar" />
            </div>
        </div>
    )
}

export default Header
