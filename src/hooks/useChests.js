import { useState } from 'react';

export default function useChests() {
  const [item, setInnerValue] = useState(() => {
    return {
      loaded: false,
      chests: []
    };
  });

  const setToken = value => {
    setInnerValue(value);
  };

  return [item, setToken];
}
