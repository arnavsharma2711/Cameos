import React, { useEffect } from 'react'
import { Col, Container} from 'react-bootstrap'
import Video from '../../components/video/Video'
import CategoriesBar from '../../components/categoriesBar/CategoriesBar'
import { useDispatch,useSelector } from 'react-redux'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action'
import InfiniteScroll from 'react-infinite-scroll-component'
import VideoSkeleton from '../../components/skeletons/videoSkeleton/VideoSkeleton'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const FetchScreen = () => {

   const { fetch } = useParams()

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getVideosByCategory(fetch))
    },)

    const { videos, activeCategory, loading } = useSelector(state => state.homeVideos)

    const fetchData = () => {
        if (activeCategory === 'All') 
            dispatch(getPopularVideos())
        else
           dispatch(getVideosByCategory(activeCategory))
         }
         
         return (
       <Container>
         <Helmet>
            <title>Cameos</title>
         </Helmet>
       <CategoriesBar/>

       <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          loader={
             <div className='spinner-border text-light d-block mx-auto'></div>
          }
          className='row'
          style={{backgroundColor:'#181818'}}>
          {!loading
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
       </InfiniteScroll>
    </Container>
   )
}

export default FetchScreen