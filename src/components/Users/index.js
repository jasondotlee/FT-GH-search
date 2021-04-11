import React from 'react';
import useQueryUsers from '../../hooks/useQueryUsers';
import UserCard from './UserCard';
import './index.css';
// import useSkeletonLoading from '../../hooks/'

const Users = ({search}) => {
  const {
    data: userData,
    error: userError,
    isFetching: userIsFetching,
  } = useQueryUsers(search);
  const mockUser = {avatar_url: '', html_url: '', login: '', id: ''};

  return (
    <>
      <div className={['users-container']}>
        {!userIsFetching &&
          !userError &&
          userData.items.map(user => <UserCard user={user} key={user.id} />)}
        {userIsFetching &&
          Array.from(Array(12)).map((el, i) => {
            return <UserCard loading={userIsFetching} user={mockUser} />;
          })}
      </div>
    </>
  );
};
export default Users;
