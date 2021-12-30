import React from "react"
import ContentLoader from "react-content-loader"

const SearchVideoHorizontalSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={'100%'}
    viewBox="0 0 270 75"
    backgroundColor="#AFAFAF"
    foregroundColor="#FAFAFA"
    {...props}
    >
    <rect x="10%" y="10%" rx="3" ry="3" width="35%" height="70%" />
    <rect x="50%" y="15%" rx="2" ry="2" width="50%" height="4%" /> 
    <rect x="50%" y="25%" rx="2" ry="2" width="35%" height="4%" /> 
    <rect x="50%" y="42%" rx="1" ry="1" width="25%" height="2.5%" /> 
    <rect x="50%" y="60%" rx="1" ry="1" width="50%" height="3%" /> 
    <rect x="50%" y="70%" rx="1" ry="1" width="40%" height="3%" /> 
  </ContentLoader>
)

export default SearchVideoHorizontalSkeleton
