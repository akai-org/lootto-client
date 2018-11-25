import { useState } from 'react';

export default function useDescription() {
  const [item, setInnerValue] = useState(() => {
    return {
      isActive: false,
      name: '',
      description: '',
      zoom: ''
    };
  });

  const setDescription = value => {
    setInnerValue(value);
  };

  return [item, setDescription];
}
