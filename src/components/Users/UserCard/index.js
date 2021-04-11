import React from 'react';
import './index.css';

const UserCard = ({user, loading}) => {

  const {avatar_url, html_url, login, id} = user;
  return (
    <>
      <div className={['user-card-container']}>
        {!loading ? (
          <>
            <div>
              Username: {login} ID: {id}
            </div>
            <a href={html_url}>
              <img
                className={['user-img']}
                src={avatar_url}
                alt="profile image"
              />
            </a>
          </>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </>
  );
};
export default UserCard;

//  For the users, show the profile picture, name, location, any other data you have and link to their profile.
