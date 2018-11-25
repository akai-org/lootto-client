import { useState } from 'react';

export default function useDescription() {
  const [item, setInnerValue] = useState(() => {
    return {
      isActive: false,
      name: '',
      description: '',
      zoom: '',
      selectedAchievement: -1
    };
  });

  const setDescription = value => {
    setInnerValue(value);
  };

  return [item, setDescription];
}
