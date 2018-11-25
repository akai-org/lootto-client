import Cookies from 'universal-cookie';

export const request = (path, { method, body, headers }) => (
  fetch(`${process.env.REACT_APP_API}/${path}`, {
    headers: {
      'Accept': 'application/json', // eslint-disable-line quote-props
      'Content-Type': 'application/json',
      ...headers,
    },
    method,
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (!response.ok) throw new Error(response);
      return response.json();
    })
);

export const authorizedRequest = (path, args = {}) => {
  const headers = args.headers || {};
  const cookies = new Cookies();
  headers.Authorization = `Bearer ${cookies.get('token')}`;
  return request(path, { ...args, headers });
};
