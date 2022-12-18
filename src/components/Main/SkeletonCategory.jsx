import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonCategory = (props) => (
  <ContentLoader
    speed={3}
    width={500}
    height={48}
    viewBox="0 0 800 250"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="130" ry="130" width="580" height="258" />
  </ContentLoader>
);

export default SkeletonCategory;
