import React, { useEffect, useState } from 'react'
import './videoHorizontal.scss'

import { AiFillEye } from 'react-icons/ai'
import request from '../../api'

import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { MdSubscriptions } from 'react-icons/md'

const VideoHorizontal = ({ video, searchScreen, subScreen }) => {
   const {
      id,
      snippet: {
         channelId,
         channelTitle,
         description,
         title,
         publishedAt,
         thumbnails: { medium },
         resourceId,
      },
   } = video

   const isVideo = !(id.kind === 'youtube#channel' || subScreen)

   const [views, setViews] = useState(null)
   const [duration, setDuration] = useState(null)
   const [channelIcon, setChannelIcon] = useState(null)

   useEffect(() => {
      const get_video_details = async () => {
         const {
            data: { items },
         } = await request('/videos', {
            params: {
               part: 'contentDetails,statistics',
               id: id.videoId,
            },
         })
         setDuration(items[0].contentDetails.duration)
         setViews(items[0].statistics.viewCount)
      }
      if (isVideo) get_video_details()
   }, [id, isVideo])

   useEffect(() => {
      const get_channel_icon = async () => {
         const {
            data: { items },
         } = await request('/channels', {
            params: {
               part: 'snippet',
               id: channelId,
            },
         })
         setChannelIcon(items[0].snippet.thumbnails.default)
      }
      get_channel_icon()
   }, [channelId])

   const seconds = moment.duration(duration).asSeconds()
   const _duration = moment.utc(seconds * 1000).format('mm:ss')

   const navigate = useNavigate()

   const _channelId = resourceId?.channelId || channelId

   const handleClick = () => {
      isVideo
         ? navigate(`/watch/${id.videoId}`)
         : navigate(`/channel/${_channelId}`)
   }

   const thumbnail = !isVideo && 'videoHorizontal__thumbnail-channel'

   return (
      <Row
         className='py-2 m-1 videoHorizontal align-items-center'
         onClick={handleClick}>
         {/* //TODO refractor grid */}
         <Col xs={6} md={searchScreen || subScreen ? 4 : 6} className='videoHorizontal__left'>
            <LazyLoadImage src={medium.url ? medium.url : `https://cdn-icons-png.flaticon.com/512/734/734467.png`} effect='blur' className={`videoHorizontal__thumbnail ${thumbnail} `}
               wrapperClassName='videoHorizontal__thumbnail-wrapper'/>
            {isVideo && (
               <span className='videoHorizontal__duration'>{_duration}</span>
            )}
         </Col>
         <Col xs={6}md={searchScreen || subScreen ? 8 : 6}
            className='p-0 videoHorizontal__right'>
            <p className={subScreen || !isVideo ? 'mb-1 videoHorizontal__titleChannel' : 'mb-1 videoHorizontal__title'}>{title}</p>

            {isVideo && (
               <div className='videoHorizontal__details'>
                  <AiFillEye /> {numeral(views).format('0.a').toUpperCase()} Views • {moment(publishedAt).fromNow()}
               </div>
            )}

            {(searchScreen || subScreen) && (
               <p className='mt-1 videoHorizontal__desc'>{description}</p>
            )}

            <div className='my-1 videoHorizontal__channel d-flex align-items-center'>
               {isVideo && (
                  <LazyLoadImage src={channelIcon?.url ? channelIcon?.url : `https://cdn-icons-png.flaticon.com/512/149/149071.png`} effect='blur' />
               )}
              {isVideo &&(<p className='mb-0' style={{color:'#fff'}}>{channelTitle}</p>)}                
            </div>
            {subScreen && (
               <p className='mt-2'>
                  <MdSubscriptions size={23} style={{marginRight:5}}/>{video.contentDetails.totalItemCount} Videos
               </p>
            )}
         </Col>
      </Row>
   )
}

export default VideoHorizontal