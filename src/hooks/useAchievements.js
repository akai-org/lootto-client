import { useState } from 'react';

export default function useAchievements() {
  const [item, setInnerValue] = useState(() => {
    return {
      loaded: false,
      chests: []
    };
  });

  const setAchievements = value => {
    setInnerValue(value);
  };

  return [item, setAchievements];
}
