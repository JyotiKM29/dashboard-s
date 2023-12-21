
import React from "react";
import { ChartLine, House, Info, Question, Table } from "@phosphor-icons/react";
import { RxDashboard } from "react-icons/rx";

const iconData = [
  { icon: House, className: " h-6 w-6 md:h-8 md:w-8 text-stone-50 m-3", key: "house" },
  { icon: RxDashboard, className: "h-6 w-6 md:h-8 md:w-8 text-stone-50 m-3", key: "rxDashboard" },
  { icon: ChartLine, className: "h-6 w-6 md:h-8 md:w-8 text-stone-50 m-3", key: "chartLine" },
  { icon: Table, className: "h-6 w-6 md:h-8 md:w-8 text-stone-50 m-3", key: "table" },
  { icon: Info, className: "h-6 w-6 md:h-8 md:w-8 text-stone-50 m-3", key: "info" },
];

const Sidebar = () => {
  return (
    <div className="dark:bg-teal-400  bg-blue-600 flex md:flex-col md:px-3 md:py-4 md:space-y-2 items-center justify-center rounded-full p-2 space-x-2 px-4">
      {iconData.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.key}
            className="rounded-full hover:bg-blue-700 active:bg-blue-800 cursor-pointer dark:hover:bg-teal-500"
          >
            <Icon className={item.className} />
          </button>
        );
      })}
    </div>
  );
};

export default Sidebar;
