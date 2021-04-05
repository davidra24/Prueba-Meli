import { useState } from 'react';

/**
 * 
 * @param {String} initialValue Valor inicial que tendrá el Input a utilizar
 * @returns Hook personalizado que generaliza el comportamiento de un input
 */
export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const clean = () => setValue(initialValue);
  return { value, onChange, clean };
};