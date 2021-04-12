export default function sortUsers(userData){
  userData.sort((a, b) => {
    return a.login.localeCompare(b.login, undefined, {
      numeric: true,
      sensitivity: 'base',
    });
  });
}