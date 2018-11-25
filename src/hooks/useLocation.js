import { useState } from 'react';

export default function useLocation() {
  const [item, setInnerValue] = useState(() => {
    return {};
  });

  const options = {
    enableHighAccuracy: true,
    timeout: 15000,
    maximumAge: 0
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      location => {
        setInnerValue(location);
      },
      err => {},
      options
    );
  };

  getLocation();

  return [item, getLocation];
}
