export default function SmallCard() {
  return (
    <div>
      <div className="w-full lg:w-full h-full flex flex-wrap justify-between p-8 ">
        {/* Card 1 */}
        <div className="w-full sm:w-1/2 lg:w-1/5 mb-4 lg:mb-0 ">
          <div className="bg-white p-4 rounded-md shadow-md">
            <p className="text-md lg:text-[14px] font-semibold mb-2 lg:mb-4">
              Purchased goods ans Services ! <br />
              <span className="text-[10px] text-gray-400">
                contribution to Scope3
              </span>
            </p>
            <div className="bg-red-100 border border-red-300 p-2 rounded-md">
              <p className="text-[13px]  font-bold">441510.9 CO2e</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-1/2 lg:w-1/5 mb-4 lg:mb-0 p-2">
          <div className="bg-white p-4 rounded-md shadow-md">
            <p className="text-md lg:text-[13px] font-semibold mb-2 lg:mb-4">
              Purchased goods ans Services to revenue ratio !
            </p>
            <div className="bg-yellow-100 border border-yellow-300 p-2 rounded-md">
              <p className="text-[13px]  font-bold">323586.2 CO2e</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-1/2 lg:w-1/5 mb-4 lg:mb-0 p-2">
          <div className="bg-white p-4 rounded-md shadow-md">
            <p className="text-md lg:text-[14px] font-semibold mb-2 lg:mb-4">
              Category-1 ! <br />
              <span className="text-[10px] text-gray-400">
                contribution to Scope3
              </span>
            </p>
            <div className="bg-green-100 border border-green-300 p-2 rounded-md">
              <p className="text-[13px]  font-bold">32% of Scope3</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full sm:w-1/2 lg:w-1/5 p-2">
          <div className="bg-green-500 p-4 rounded-md shadow-md text-white">
            <p className="text-md lg:text-[14px] font-semibold mb-2 lg:mb-4">
              Total number of <br /> reached suppliers
            </p>
            <p className="text-lg lg:text-lg font-bold">143</p>
          </div>
        </div>
      </div>
    </div>
  );
}
