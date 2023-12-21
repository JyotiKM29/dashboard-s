import React from "react";
import { ChartLine, House, Info, Question, Table } from "@phosphor-icons/react";
import { RxDashboard } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const iconData = [
  { index:0,
    icon: House,
    className: " h-6 w-6 md:h-8 md:w-8 text-stone-50 m-3 ",
    key: "house",
  },
  { index:1,
    icon: RxDashboard,
    className: "h-6 w-6 md:h-8 md:w-8 text-stone-50 m-3",
    key: "rxDashboard",
  },
  { index:2,
    icon: ChartLine,
    className: "h-6 w-6 md:h-8 md:w-8 text-stone-50 m-3",
    key: "chartLine",
  },
  {index:3,
    icon: Table,
    className: "h-6 w-6 md:h-8 md:w-8 text-stone-50 m-3",
    key: "table",
  },
  {index:4,
    icon: Info,
    className: "h-6 w-6 md:h-8 md:w-8 text-stone-50 m-3",
    key: "info",
  },
];

const getPath = (index) => {
  switch (index) {
    case 0:
      return "/";

    case 1:
      return "/table";

    case 2:
      return "/";

    case 3:
      return "/table";

    case 4:
      return "/settings";

    default:
      break;
  }
};

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="dark:bg-teal-400  bg-blue-600 flex md:flex-col md:px-3 md:py-4 md:space-y-2 items-center justify-center rounded-full p-2 space-x-2 px-4 md:transition-all  md:hover:py-16 md:hover:scale-105">
      {iconData.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.key}
            className="rounded-full hover:bg-blue-700 active:bg-blue-800 cursor-pointer dark:hover:bg-teal-500 dark:active:bg-teal-600"
            onClick={() => {
              navigate(getPath(item.index));
            }}
          >
            <Icon className={item.className} />
          </button>
        );
      })}
    </div>
  );
};

export default Sidebar;
