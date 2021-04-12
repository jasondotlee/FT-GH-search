import React, {useRef} from 'react';
import useQueryUsers from '../../hooks/useQueryUsers';
import UserCard from './UserCard';
import './index.css';
import {v4 as uuidv4} from 'uuid';
import sortUsers from '../../utils/sortUsers';

const Users = ({searchTerm, enableSort}) => {
  const {
    data: userData,
    error: userFetchError,
    isFetching: userIsFetching,
  } = useQueryUsers(searchTerm);
  
  const sortedUsers = useRef([]);

  if (userData && enableSort) {
    sortedUsers.current = [...userData.items];
    sortUsers(sortedUsers.current);
  }

  const theUsers = enableSort ? sortedUsers.current : userData?.items;
  const mockUser = {avatar_url: '', html_url: '', login: '', id: ''};
  return (
    <div className={['users-container']}>
      {!userIsFetching &&
        (!userFetchError ?
        theUsers.map(user => <UserCard user={user} key={user.id} />):<div>Error: {userFetchError}</div>)}
      {userIsFetching &&
        Array.from(Array(12)).map(() => {
          return (
            <UserCard loading={userIsFetching} user={mockUser} key={uuidv4()} />
          );
        })}
    </div>
  );
};
export default Users;
