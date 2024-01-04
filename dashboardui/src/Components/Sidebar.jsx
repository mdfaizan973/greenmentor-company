const Sidebar = () => {
  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-full p-5 bg-black">
        <div className="text-2xl font-bold mb-2">PETERS</div>
        <div className="mt-[50px]">
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

        <div className="mt-[50px]">
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
        <button className="bg-green-500 hover:bg-green-600 text-white text-[12px] mt-[80px] font-bold py-3 px-10 rounded">
          Open Help Center
        </button>
      </aside>
    </div>
  );
};

export default Sidebar;
