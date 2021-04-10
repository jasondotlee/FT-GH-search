import React from 'react';
import useQueryUsers from '../../hooks/useQueryUsers';
import UserCard from './UserCard';

const Users = () => {
  const {
    status: userStatus,
    data: userData,
    error: userError,
    isFetching: userIsFetching,
  } = useQueryUsers('somedev');

  console.log('333', userStatus, userData?.items, userError, userIsFetching);

  return (
    <>
      <div>Users</div>

      {!userIsFetching &&
        userData.items.map(user => <UserCard user={user} key={user.id} />)}
    </>
  );
};
export default Users;
