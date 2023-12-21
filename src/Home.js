import React from "react";
import ChartComponent from "./components/ChartComponent";
import PriceAreaChart from "./components/category/PriceAreaChart";
import SentimentStackedBarChart from "./components/category/SentimentStackedBarChart";
import TypesRadialChart from "./components/category/TypesRadialChart";
import CatgoryDonut from "./components/category/CatgoryDonut";
import { AndroidLogo, GooglePlayLogo, ThumbsUp, UsersThree } from "@phosphor-icons/react";



const chartData = [
  { chart: <PriceAreaChart />, title: "Download Metrics" },
  { chart: <SentimentStackedBarChart />, title: "User Feedback" },
  { chart: <TypesRadialChart />, title: "Trending App Installations" },
  { chart: <CatgoryDonut />, title: "Primary App Acquisitions" },

];

const getIcon = (title) => {
  switch (title) {
    case 'Download Metrics':
      return <GooglePlayLogo size={32} className="h-12 font-bold dark:text-slate-100 text-lg" />;
    case 'User Feedback':
      return <ThumbsUp size={32} className="h-12 font-bold dark:text-slate-100 text-lg" />;
    case 'Trending App Installations':
      return <UsersThree size={32} className="h-12 font-bold dark:text-slate-100 text-lg" />;
    case 'Primary App Acquisitions':
      return <AndroidLogo size={32} className="h-12 font-bold dark:text-slate-100 text-lg" />;
    default:
      return null;
  }
};


export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-3 md:p-8 md:pl-16 h-full w-full gap-8">
      {chartData.map((item, index) => (
        <div key={index} className="border dark:bg-[#424242] dark:shadow-lg dark:border-zinc-700 rounded-xl h-full w-full p-4  ">
          <div className="flex justify-between items-center h-12 p-2 pt-0">
            <h2 className="text-xl dark:text-slate-100 md:text-2xl font-semibold">{item.title}</h2>
            {getIcon(item.title)}
          </div>
          <hr className="dark:border-neutral-600 "/>
          <ChartComponent>{item.chart}</ChartComponent>
        </div>
      ))}
    </div>
  );
}
