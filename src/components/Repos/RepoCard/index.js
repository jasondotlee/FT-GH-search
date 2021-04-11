import React from 'react';
import get from 'lodash/get';
import './index.css';

const RepoCard = ({repo}) => {
  console.log('repo', repo);
  const userData = get(repo, 'owner', []);
  const {stargazers_count} = repo;
  const {login, html_url} = userData;
  console.log('userName', login);
  return (
    <>
      <div className='card'>
        <h4></h4>

        <a href={html_url}>{repo.name}</a>
        <p>StarCount12e12312312312213: {stargazers_count}</p>
      </div>
    </>
  );
};
export default RepoCard;

// When the user starts typing into the input, make an API call to fetch the results and display them in the form of grid below it.
//  For each repository display the repository user details returned from API and the repository name, author, stars and other
// statistics below it.
// Consider all the states: initial, loading, error,... and inform the user about it. The resulting screen should look something like this:
