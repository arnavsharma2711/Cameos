import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import SearchVideoHorizontalSkeleton from '../../components/skeletons/searchVideoHorizontalSkeleton/SearchVideoHorizontalSkeleton'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
import { getVideosBySearch } from '../../redux/actions/videos.action'

const SearchScreen = () => {
   const { query } = useParams()

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getVideosBySearch(query))
   }, [query, dispatch])

   const { videos, loading } = useSelector(state => state.searchedVideos)
   return (
      <Container>
         <Helmet>
            <title>YouTube Clone | Search Result</title>
        </Helmet>
         {!loading ? (
            videos?.map(video => (
               <VideoHorizontal
                  video={video}
                  key={video.id.videoId}
                  searchScreen
               />
            ))
         ) : ([...Array(20)].map(() => (<SearchVideoHorizontalSkeleton/>)))}
      </Container>
   )
}

export default SearchScreen