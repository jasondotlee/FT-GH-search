import React from 'react';
import useQueryRepos from '../../hooks/useQueryRepos';
import RepoCard from './RepoCard';
import './index.css';

const Repos = ({search}) => {
  const {
    data: repoData,
    error: repoFetchError,
    isFetching: repoIsFetching,
  } = useQueryRepos(search);
  const mockRepo = {avatar_url: '', html_url: '', login: '', id: ''};

  return (
    <>
      <div className={['repos-container']}>
        {' '}
        {!repoIsFetching &&
          repoData.items?.map(repo => <RepoCard repo={repo} key={repo.id} />)}
        {repoIsFetching &&
          Array.from(Array(12)).map((el, i) => {
            return <RepoCard loading={repoIsFetching} repo={mockRepo} />;
          })}
      </div>
    </>
  );
};
export default Repos;
