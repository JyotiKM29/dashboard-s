import Home from "./Home";
import Sidebar from "./components/Sidebar";
import {  useEffect, useContext } from "react";
import ToggleButton from "./components/ToggleBotton";
import { ThemeContext } from "./context/Theme";

function AppLayout() {
  const {theme, setTheme} = useContext(ThemeContext);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    console.log(theme)
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
     <div className="grid dark:bg-zinc-900 md:grid-cols-12 h-screen bg-indigo-100 ">
      <div className="md:col-start-1 md:row-start-1 md:col-end-13 overflow-y-auto w-full h-full  p-3 md:p-8 md:pl-16">
        <div className="w-full dark:bg-zinc-800 bg-stone-100 rounded-lg shadow-2xl">
        {/* <button className="bg-green-200 p-4 rounded-3xl" onClick={handleThemeSwitch}>
        Dark Mode
      </button> */}
  <ToggleButton handleThemeSwitch={handleThemeSwitch}/>
          <Home />
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
