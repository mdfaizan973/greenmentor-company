import { useState } from "react";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex flex-col h-[100%] bg-black text-white">
      {/* Menu Bar for full Screens */}
      <aside className="w-full p-5 bg-black hidden lg:block">
        <div className="text-2xl font-bold mb-2">PETERS</div>
        <div className="border-t border-gray-800 my-5"></div>
        <div className="mt-[40px]">
          <div className="text-xs mt-4 font-bold text-gray-500 mb-4">
            DATA-IN
          </div>

          {/* Select Tag */}
          <select className="mt-4 w-full text-[13px] rounded-md bg-black text-white focus:outline-none ">
            <option>Energy</option>
            <option>Energy</option>
            <option>Energy</option>
          </select>
          <select className="mt-6 w-full text-[13px] rounded-md bg-black text-white focus:outline-none ">
            <option>Water and Effluents</option>
            <option>Water and Effluents</option>
            <option>Water and Effluents</option>
          </select>
        </div>
        <div className="border-t border-gray-800 my-5"></div>

        <div className="mt-[40px]">
          <div className="text-xs font-bold text-gray-500 mt-4 mb-4">
            ANALYZE
          </div>
          <select className="mt-6 w-full text-[13px] rounded-md bg-black text-white focus:outline-none ">
            <option>Energy</option>
            <option>Energy</option>
            <option>Energy</option>
          </select>
          <select className="mt-6 w-full text-[13px] rounded-md bg-black  focus:outline-none ">
            <option>
              Waste <span className="text-xs text-green-800">(Beta)</span>
            </option>
            <option>Waste</option>
            <option>Waste</option>
          </select>
        </div>

        <div className="border-t border-gray-800 my-5"></div>
        <button className="bg-green-500 hover:bg-green-600 text-white text-[12px] mt-[80px] font-bold py-3 px-10 rounded">
          Open Help Center
        </button>
      </aside>
      <div className="sm:hidden">
        <button
          className="text-white p-2 focus:outline-none"
          onClick={toggleSidebar}
        >
          ☰
        </button>
      </div>
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "fixed inset-0 z-50" : "hidden"
        } sm:relative w-[90%] sm:w-64 h-full bg-black text-white transition-transform duration-300 ease-in-out transform`}
      >
        <div className="flex justify-between items-center p-5">
          <div className="text-2xl font-bold">PETERS</div>
          <button
            className="text-white p-2 focus:outline-none"
            onClick={closeSidebar}
          >
            ✕
          </button>
        </div>
        <div className="border-t border-gray-800 my-5"></div>
        <div className={`${isSidebarOpen ? "" : "hidden"} mt-4`}>
          <aside className="w-full p-5 bg-black">
            <div className="border-t border-gray-800 my-5"></div>
            <div className="mt-[40px]">
              <div className="text-xs mt-4 font-bold text-gray-500 mb-4">
                DATA-IN
              </div>

              {/* Select Tag */}
              <select className="mt-4 w-full text-[13px] rounded-md bg-black text-white focus:outline-none ">
                <option>Energy</option>
                <option>Energy</option>
                <option>Energy</option>
              </select>
              <select className="mt-6 w-full text-[13px] rounded-md bg-black text-white focus:outline-none ">
                <option>Water and Effluents</option>
                <option>Water and Effluents</option>
                <option>Water and Effluents</option>
              </select>
            </div>
            <div className="border-t border-gray-800 my-5"></div>

            <div className="mt-[40px]">
              <div className="text-xs font-bold text-gray-500 mt-4 mb-4">
                ANALYZE
              </div>
              <select className="mt-6 w-full text-[13px] rounded-md bg-black text-white focus:outline-none ">
                <option>Energy</option>
                <option>Energy</option>
                <option>Energy</option>
              </select>
              <select className="mt-6 w-full text-[13px] rounded-md bg-black  focus:outline-none ">
                <option>
                  Waste <span className="text-xs text-green-800">(Beta)</span>
                </option>
                <option>Waste</option>
                <option>Waste</option>
              </select>
            </div>

            <div className="border-t border-gray-800 my-5"></div>
            <button className="bg-green-500 hover:bg-green-600 text-white text-[12px] mt-[80px] font-bold py-3 px-10 rounded">
              Open Help Center
            </button>
          </aside>
        </div>
        <div className="border-t border-gray-800 my-5"></div>
      </aside>
    </div>
  );
};

export default Sidebar;
