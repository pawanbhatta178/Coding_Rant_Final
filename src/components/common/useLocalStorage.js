import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState();

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      setStoredValue((current) => {
        try {
          return JSON.parse(item) ?? current;
        } catch (err) {
          console.log("caught the err");
          return current;
        }
      });
    } catch (err) {
      console.error(err);
    }
  }, [key, initialValue]);

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.error(err);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
