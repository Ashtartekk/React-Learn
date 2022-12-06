import { useEffect, useState } from "react";

export function useLocalStorage(key: any, defaultValue: any) {
  const [message, setMessage] = useState(defaultValue);
  //每次只要message变化，就会自动同步到本地localstorage
  useEffect(() => {
    window.localStorage.setItem(key, message);
  }, [message, key]);
  return [message, setMessage];
}
