import React from "react"
import ContentLoader from "react-content-loader"

const VideoSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={'100%'}
    viewBox="0 0 260 200"
    backgroundColor="#AFAFAF"
    foregroundColor="#FAFAFA"
    {...props}
    >
    <rect x="10" y="10" rx="0" ry="0" width="100%" height="130" />
    <rect x="30%" y="157" rx="3" ry="3" width="25%" height="6" /> 
    <rect x="30%" y="176" rx="3" ry="3" width="65%" height="6" /> 
    <circle cx="15%" cy="170" r="10%" /> 
  </ContentLoader>
)

export default VideoSkeleton
