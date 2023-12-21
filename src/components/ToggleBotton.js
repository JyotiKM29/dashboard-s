import { useState } from 'react';

const ToggleButton = ({handleThemeSwitch}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      onClick={()=>{toggleButton();
        handleThemeSwitch();
      }}
      className={`${
        isActive ? 'dark:bg-teal-400 bg-blue-500' : 'bg-gray-300'
      } w-14 h-6 rounded-full p-1 focus:outline-none transition-colors duration-300 flex items-center justify-center`}
    >
      <span
        className={`${
          isActive ? 'translate-x-4' : '-translate-x-[14px]'
        } inline-block w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300`}
      />
    </button>
  );
};

export default ToggleButton;
