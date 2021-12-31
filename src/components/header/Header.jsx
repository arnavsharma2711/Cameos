import React, { useState } from 'react'

import './header.scss'

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'

const Header = ({handleToggleSidebar}) => {
    const [input, setInput] = useState('')

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        navigate(`/search/${input}`)
    }
    const user = useSelector(state => state.auth?.user)
    const handleConnectionLinks = (link) => {
        if (link==="linkedin")
            window.open("https://www.linkedin.com/in/arnavsharma2711/", "_blank")
        else
            window.open("https://github.com/arnavsharma2711", "_blank")
            
    }
    return (
        <div className='header'>
            <FaBars className='header__menu' size={26}
            onClick={() => handleToggleSidebar()}/>
                <p style={{margin:0}}><em>Cameos</em></p>
            {/* <img src='https://cdn-icons-png.flaticon.com/512/1384/1384060.png' alt='YouTube' className='header__logo' /> */}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Search...' value={input} onChange={e => setInput(e.target.value)}/>
                <button>
                    <AiOutlineSearch size={22}/>
                </button>
            </form>

            <div className="header__icons">
                <MdNotifications size={28}/>
                <Dropdown>
                    <Dropdown.Toggle variant="dark" bg="transparent" drop="start" id='dropdown-button-drop-start'>
                    <MdApps size={28}/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                        <Dropdown.ItemText>Connnect over</Dropdown.ItemText>
                        <Dropdown.Item onClick={() => handleConnectionLinks("linkedin")}><img className='dropdownIcon' src='https://cdn-icons-png.flaticon.com/512/145/145807.png' alt='LinkedIn'/>LinkedIn</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleConnectionLinks("github")}><img className='dropdownIcon' src='https://cdn-icons-png.flaticon.com/512/5968/5968896.png' alt='GitHub'/>Github</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                
                <img src={user?.photoURL ? user?.photoURL : `https://cdn-icons-png.flaticon.com/512/149/149071.png`} alt="Avatar" />
            </div>
        </div>
    )
}

export default Header
