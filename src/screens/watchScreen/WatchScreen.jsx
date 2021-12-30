import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Helmet from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AddComment from '../../components/addComment/AddComment'
import HorizontalVideoSkeleton from '../../components/skeletons/horizontalVideoSkeleton/HorizontalVideoSkeleton'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
import VideoMetaData from '../../components/videoMetaData/VideoMetaData'
import { getRelatedVideos, getVideoById } from '../../redux/actions/videos.action'
import './watchScreen.scss'

const WatchScreen = () => {

    const {id} = useParams()

    const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getVideoById(id))

      dispatch(getRelatedVideos(id))
   }, [dispatch, id])

   const { videos, relatedVideosLoading } = useSelector(
      state => state.relatedVideos
   )

    const { video, loading } = useSelector(state => state.selectedVideo)

    return (
        <Row>
            <Helmet>
            <title>{video?.snippet?.title}</title>
         </Helmet>
            <Col lg={8}>
                <div className="watchScreen__player">
                <iframe src={`https://www.youtube.com/embed/${id}`} frameBorder='0' title={video?.snippet?.title} allowFullScreen width='100%' height='100%'></iframe>
                {/* <iframe src={`https://www.youtube.com/embed/${id}?autoplay=1`} frameBorder='0' title={video?.snippet?.title} allowFullScreen width='100%' height='100%'></iframe> */}
                </div>
                {!loading ? <VideoMetaData video={video} videoId={id} /> : <h6>Loading...</h6>}
                <AddComment videoId={id} totalComments={video?.statistics?.commentCount} />
            </Col>
            <Col lg={4}>
                {!relatedVideosLoading 
                ? videos?.filter(video => video.snippet).map((video)=><VideoHorizontal video={video} key={video.id.videoId}/>)
                :[...Array(20)].map(() => (<HorizontalVideoSkeleton />))}

            </Col>
        </Row>
    )
}

export default WatchScreen
