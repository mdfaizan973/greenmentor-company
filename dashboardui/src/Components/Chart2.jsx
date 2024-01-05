export default function Chart2() {
  return (
    <div>
      <div className=" mx-auto bg-white w-full rounded-md overflow-hidden shadow-md p-4">
        <h2 className="text-md font-bold mb-4">
          Top 3 Suppliers contributing to Category-1
        </h2>
        <div className="flex items-center">
          <div className="flex items-center mb-2">
            <span className="text-blue-500 text-[40px] mr-2">&#8226;</span>
            <p className="text-sm font-semibold">
              Supplier-1 <span className="">64%</span>{" "}
            </p>
          </div>
          <div className="flex items-center mb-2 ml-6">
            <span className="text-orange-500 text-[40px] mr-2">&#8226;</span>
            <p className="text-sm font-semibold">
              Supplier-2 <span>32%</span>
            </p>
          </div>
          <div className="flex items-center mb-2 ml-6">
            <span className="text-green-500 text-[40px] mr-2">&#8226;</span>
            <p className="text-sm font-semibold">
              Supplier-3 <span>15%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
