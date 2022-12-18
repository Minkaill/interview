import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="mb-4"
    speed={2}
    width={800}
    height={15}
    viewBox="0 0 1000 15"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="1000" height="22" />
  </ContentLoader>
);

export default Skeleton;
