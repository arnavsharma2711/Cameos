import React from 'react'
import moment from 'moment'
import './comments.scss'
const Comments = ({ comment }) => {
   
   const { authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay, } = comment

   return (
      <div className='p-2 comment d-flex'>
         <img src={authorProfileImageUrl ? authorProfileImageUrl : `https://cdn-icons-png.flaticon.com/512/149/149071.png`} alt='' className='mr-3 rounded-circle' />
         <div className='comment__body'>
            <p className='mb-1 comment__header'>{authorDisplayName} • {moment(publishedAt).fromNow()}</p>
            <p className='mb-0'>{textDisplay}</p>
         </div>
      </div>
   )
}

export default Comments