import axios from 'axios';
import {useQuery} from 'react-query';

const GITHUB_API = 'https://api.github.com';

const getRepos = async repoName => {
  const {data} = await axios.get(
    `${GITHUB_API}/search/repositories?q=${repoName}&per_page=100`,
  );
  return data;
};

export default function useQueryRepos(repoName) {
  return useQuery(['repos', repoName], () => getRepos(repoName));
}
