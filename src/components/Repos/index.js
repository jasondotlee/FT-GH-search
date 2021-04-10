import React from 'react';
import useQueryRepos from '../../hooks/useQueryRepos';
import RepoCard from './RepoCard';

const Repos = () => {
  const {
    status: repoStatus,
    data: repoData,
    error: repoFetchError,
    isFetching: repoIsFetching,
  } = useQueryRepos('somerepo');
  console.log('123123123');
  console.log('444', repoStatus, repoData, repoFetchError, repoIsFetching);

  return (
    <>
      <div>Repos</div>

      {!repoIsFetching &&
        repoData.items?.map(repo => <RepoCard repo={repo} key={repo.id} />)}
    </>
  );
};
export default Repos;
