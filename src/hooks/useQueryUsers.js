import axios from 'axios';
import {useQuery} from 'react-query';

const GITHUB_API = 'https://api.github.com';

const getUsers = async userName => {
  const {data} = await axios.get(`${GITHUB_API}/search/users?q=${userName}`);
  return data;
};

export default function useQueryUsers(userName) {
  return useQuery(['users', userName], () => getUsers(userName));
}
