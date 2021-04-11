import React from 'react';
import useQueryUsers from '../../hooks/useQueryUsers';
import UserCard from './UserCard';
import './index.css';

const Users = ({search}) => {
  const {
    status: userStatus,
    data: userData,
    error: userError,
    isFetching: userIsFetching,
  } = useQueryUsers(search);

  console.log(
    '333',
    search,
    userStatus,
    userData?.items,
    userError,
    userIsFetching,
  );

  return (
    <>
      <div className={['users-container']}>
        {' '}
        {!userIsFetching &&
          userData.items.map(user => <UserCard user={user} key={user.id} />)}
      </div>
    </>
  );
};
export default Users;
