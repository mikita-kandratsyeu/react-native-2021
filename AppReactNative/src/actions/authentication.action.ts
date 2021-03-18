import axios from 'axios';
import { apiHost } from '../constans';

export const loginIntoSystem = (login: string, password: string) =>
  axios({
    method: 'POST',
    url: `${apiHost}index.php?rt=a/account/login`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: `loginname=${login}&password=${password}`,
  })
    .then(res => Promise.resolve(res.data))
    .catch(err => console.error(err));
