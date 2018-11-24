import { useState } from "react";

export default function useWallet() {
  const [item, setInnerValue] = useState(() => {
    return {
      loaded: false,
      stars: 0
    };
  });

  const setToken = value => {
    setInnerValue(value);
  };

  return [item, setToken];
}
