import React from 'react';
import get from 'lodash/get';
import './index.css';

const RepoCard = ({repo, loading}) => {
  const userData = get(repo, 'owner', []);
  const {stargazers_count} = repo;
  const {login, html_url, id} = userData;

  return (
    <>
      <div className="card">
        {!loading ? (
          <>
            <p>Owner: {login}</p>
            <a href={html_url}>{repo.name}</a>
            <p>StarCount: {stargazers_count}</p>
            <p>id: {id}</p>
          </>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </>
  );
};
export default RepoCard;

//  For each repository display the repository user details returned from API and the repository name, author, stars and other
// statistics below it.
// Consider all the states: initial, loading, error,... and inform the user about it. The resulting screen should look something like this:
