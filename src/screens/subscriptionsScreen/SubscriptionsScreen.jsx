import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import SearchVideoHorizontalSkeleton from '../../components/skeletons/searchVideoHorizontalSkeleton/SearchVideoHorizontalSkeleton'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
import { getSubscribedChannels } from '../../redux/actions/videos.action'
import './subscriptionsScreen.scss'

const SubscriptionsScreen = () => {
   const dispatch = useDispatch()
   let x = true

   useEffect(() => {
      dispatch(getSubscribedChannels())   
      x = true   
   }, [dispatch])

   const { loading, videos } = useSelector(state => state.subscriptionsChannel)
   if(videos[0] === undefined)
         x=false
   return (
      <Container fluid style={{backgroundColor:'#181818'}}>
         <Helmet>
            <title>Subscriptions</title>
        </Helmet>
         {!loading && x ?  (
            videos?.map(video => (
               <VideoHorizontal video={video} key={video.id} subScreen />
            ))
         ) : (
            ([...Array(20)].map(() => (<SearchVideoHorizontalSkeleton/>)))
         )}
      </Container>
   )
}

export default SubscriptionsScreen