import React from "react"
import ContentLoader from "react-content-loader"

const HorizontalVideoSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={'100%'}
    viewBox="0 0 270 100"
    backgroundColor="#AFAFAF"
    foregroundColor="#FAFAFA"
    {...props}
    >
    <rect x="10" y="10%" rx="3" ry="3" width="45%" height="70%" />
    <rect x="55%" y="15%" rx="3" ry="3" width="45%" height="6%" /> 
    <rect x="55%" y="30%" rx="3" ry="3" width="35%" height="6%" /> 
    <rect x="55%" y="55%" rx="2" ry="2" width="40%" height="4%" /> 
    <rect x="55%" y="65%" rx="2" ry="2" width="25%" height="4%" /> 
  </ContentLoader>
)

export default HorizontalVideoSkeleton
