import Home from "./Pages/Home";
import Sidebar from "./components/Sidebar";
import { useEffect, useContext } from "react";
import ToggleButton from "./components/ToggleBotton";
import { ThemeContext } from "./context/ThemeProvider";
import { Outlet } from "react-router-dom";

function AppLayout() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    console.log(theme);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="grid dark:bg-zinc-900 md:grid-cols-12 h-screen bg-indigo-100 ">
        <div className="md:col-start-1 md:row-start-1 md:col-end-13 overflow-y-auto w-full h-full  p-3 md:p-8 md:pl-16">
          <div className="w-full dark:bg-zinc-800 bg-stone-100 rounded-lg shadow-2xl">
            <div className="px-8 py-4 flex justify-between items-center">
            <h1 className='font-bold text-2xl  md:text-4xl dark:text-teal-400'>SEGWISE</h1>
            <ToggleButton handleThemeSwitch={handleThemeSwitch}  />
            </div>
            <Outlet /> 
          </div>
        </div>
        <div className="md:col-start-1 md:col-end-2 md:row-start-1 flex md:items-center justify-center bg-transparent">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default AppLayout;

