import React, {useRef} from 'react';
import useQueryRepos from '../../hooks/useQueryRepos';
import RepoCard from './RepoCard';
import {v4 as uuidv4} from 'uuid';
import './index.css';

const Repos = ({searchTerm, enableSort}) => {
  const {
    data: repoData,
    error: repoFetchError,
    isFetching: repoIsFetching,
  } = useQueryRepos(searchTerm);

  const sortedRepos = useRef([]);
  const mockRepo = {avatar_url: '', html_url: '', login: '', id: ''};
  if (repoData && enableSort) {
    sortedRepos.current = [...repoData.items];
    sortedRepos.current.sort((a, b) => {
      return b.stargazers_count - a.stargazers_count;
    });
  }
  const theRepos = enableSort ? sortedRepos.current : repoData?.items;

  return (
    <>
      <div className={['repos-container']}>
        {!repoIsFetching &&
          (!repoFetchError ? (
            theRepos.map(repo => <RepoCard repo={repo} key={repo.id} />)
          ) : (
            <div>Error: {repoFetchError}</div>
          ))}
        {repoIsFetching &&
          Array.from(Array(12)).map(() => {
            return (
              <RepoCard
                loading={repoIsFetching}
                repo={mockRepo}
                key={uuidv4()}
              />
            );
          })}
      </div>
    </>
  );
};
export default Repos;
