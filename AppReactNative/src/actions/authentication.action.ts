import axios from 'axios';

export const authentication = (login: string, password: string) =>
  axios({
    method: 'POST',
    url: 'http://35.231.209.61/index.php?rt=a/account/login',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: `loginname=${login}&password=${password}`,
  })
    .then(res => Promise.resolve(res.data))
    .catch(err => console.error(err));
