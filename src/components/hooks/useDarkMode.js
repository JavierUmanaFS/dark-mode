import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';


export const useDarkMode = () => {

  const [switchValue, setSwitch] = useLocalStorage('darkmode', false);

  useEffect(() => {
    if (switchValue === true) {
      document.querySelector('body').classList.add('dark-mode')
    } else {
      document.querySelector('body').classList.remove('dark-mode');
    }
    // switchValue ? document.querySelector('body').classList.add('dark-mode')
    //   : document.querySelector('body').classList.remove('dark-mode');
  }, [switchValue]);

  return [switchValue, setSwitch]
};
