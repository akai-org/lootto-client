import Cookies from 'universal-cookie';
import { useState } from 'react';

const cookies = new Cookies();

export default function useCookie(key, initialValue) {
  const [item, setInnerValue] = useState(() => {
    try {
      return cookies.get(key) ? JSON.parse(cookies.get(key)) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setToken = value => {
    setInnerValue(value);
    cookies.set(key, JSON.stringify(value));
  };

  return [item, setToken];
}
