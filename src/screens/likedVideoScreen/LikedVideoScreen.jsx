import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import VideoSkeleton from '../../components/skeletons/videoSkeleton/VideoSkeleton'
import Video from '../../components/video/Video'
import { getlikedVideos } from '../../redux/actions/videos.action'
import './likedVideoScreen.scss'

const LikedVideoScreen = () => {
   const dispatch = useDispatch()
   let x= true

   useEffect(() => {
      dispatch(getlikedVideos())
      x= true
   }, [dispatch])

   const { loading, videos } = useSelector(state => state.likedVideos)
   if(videos[0] === undefined)
         x=false
   return (
      <Container style={{backgroundColor:'#181818'}}>
         <Row>
         {!loading && x
             ? videos.map(video => (
                  <Col lg={3} md={4}>
                     <Video video={video} key={video.id}/>
                  </Col>
               ))
             : [...Array(20)].map(() => (
                  <Col lg={3} md={4}>
                     <VideoSkeleton />
                  </Col>
               ))}
               </Row>
      </Container>
   )
}

export default LikedVideoScreen