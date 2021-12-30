import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Video from '../../components/video/Video'
import { getChannelDetails } from '../../redux/actions/channel.action'
import { getVideosByChannel } from '../../redux/actions/videos.action'
import numeral from 'numeral'

import './channelScreen.scss'
import { Helmet } from 'react-helmet'

const ChannelScreen = () => {
   
   const { channelId } = useParams()

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getVideosByChannel(channelId))
      dispatch(getChannelDetails(channelId))
   }, [dispatch, channelId])

   const { videos, loading } = useSelector(state => state.channelVideos)
   const { snippet, statistics } = useSelector(
      state => state.channelDetails.channel
   )
   console.log("VIdeo")
   console.log(videos)
   console.log("Snnippet")
   console.log(snippet)


   return (
      <>
         <Helmet>
            <title>{snippet?.title}</title>
         </Helmet>
         <div className='px-5 py-2 my-2 d-flex justify-content-between align-items-center channelHeader'>
            <div className='d-flex align-items-center'>
               <img src={snippet?.thumbnails?.default?.url} alt='' />

               <div className='ml-3 channelHeader__details'>
                  <h3>{snippet?.title}</h3>
                  <span>
                     {numeral(statistics?.subscriberCount).format('0.a')}{' '}
                     subscribers
                  </span>
               </div>
            </div>

            <button>Subscribe</button>
         </div>

         <Container>
            <Row className='mt-2'>
               {!loading
                  ? videos?.map(video => (
                       <Col md={3} lg={3}>
                          <Video video={video} channelScreen />
                       </Col>
                    ))
                  : [...Array(15)].map(() => (
                       <Col md={3} lg={3}>
                          <h1>Loading</h1>
                       </Col>
                    ))}
            </Row>
         </Container>
      </>
   )
}

export default ChannelScreen