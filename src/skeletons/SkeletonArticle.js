import React from 'react';
import Skeleton from './Skeleton';
import Shimmer from './Shimmer';

const SkeletonArticle = ({ theme }) => {
  return (
    <div className={`skeleton-container ${theme}`}>
      <div className="skeleton-article">
        <Skeleton type="title" />
        <Skeleton type="text" />
        <Skeleton type="text" />
        <Skeleton type="text" />
      </div>
      <Shimmer />
    </div>
  );
};

SkeletonArticle.defaultProps = {
  theme: 'light',
};

export default SkeletonArticle;
