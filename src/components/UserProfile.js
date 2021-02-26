import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SkeletonUserProfile from '../skeletons/SkeletonUserProfile';

const UserProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/users/1'
        );
        setProfile(res.data);
      } catch (err) {
        console.log(err);
      }
    }, 3000);
  }, []);

  return (
    <div className="user">
      <h2>User Details</h2>
      {profile ? (
        <div className="profile">
          <h3>{profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      ) : (
        <SkeletonUserProfile theme="dark" />
      )}
    </div>
  );
};

export default UserProfile;
