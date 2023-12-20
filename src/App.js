import Home from "./Home";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <>
     <div className="grid md:grid-cols-12 h-screen bg-indigo-100">
      <div className="md:col-start-1 md:row-start-1 md:col-end-13 overflow-y-auto w-full h-full  p-3 md:p-8 md:pl-16">
        <div className="w-full bg-stone-100 rounded-lg shadow-2xl">
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

export default App;
