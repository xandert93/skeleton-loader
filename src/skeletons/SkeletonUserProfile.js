import React from 'react';
import Shimmer from './Shimmer';
import Skeleton from './Skeleton';

const SkeletonUserProfile = ({ theme }) => {
  return (
    <div className={`skeleton-container ${theme}`}>
      <div className="skeleton-userProfile">
        <div>
          <Skeleton type="avatar" />
        </div>
        <div>
          <Skeleton type="title" />
          <Skeleton type="text" />
          <Skeleton type="text" />
        </div>
      </div>
      <Shimmer />
    </div>
  );
};

SkeletonUserProfile.defaultProps = {
  theme: 'light',
};

export default SkeletonUserProfile;
