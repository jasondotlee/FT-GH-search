import React from 'react';
import useQueryRepos from '../../hooks/useQueryRepos';
import RepoCard from './RepoCard';
import './index.css'

const Repos = () => {
  const {
    status: repoStatus,
    data: repoData,
    error: repoFetchError,
    isFetching: repoIsFetching,
  } = useQueryRepos('somerepo');

  return (
    <>
      <div className={['repos-container']}>
        {' '}
        {!repoIsFetching &&
          repoData.items?.map(repo => <RepoCard repo={repo} key={repo.id} />)}
      </div>
    </>
  );
};
export default Repos;
