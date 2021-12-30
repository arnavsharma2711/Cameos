import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action'

import './categoriesBar.scss'

const keywords = [
   'All',
   'Marvel Cinematic Universe',
   'The Big Bang Theory',
   'Full Stack Website',
   'Science Friction',
   'Manchester United',
   'Self Improvement',
   'Spider-Man',
   'Real Madrid',
   'Microsoft',
   'Football',
   'Coding',
   'Health',
   'Guitar',
   'Covid',
   'Redux',
 ]

const CategoriesBar = () => {
    const [activeElement, setActiveElement] = useState('All')
    const dispatch = useDispatch()

    const handleClick = value => {
         setActiveElement(value)
         if (value === 'All') 
            dispatch(getPopularVideos())
         else
            dispatch(getVideosByCategory(value))
     }

    return (
        <div id='bar' className='categoriesBar'>
           {keywords.map((value, i) => (
              <span onClick={() => handleClick(value)} key={i} className={activeElement === value ? 'active' : ''}>
                 {value}
              </span>
           ))}
        </div>
     )
}

export default CategoriesBar
