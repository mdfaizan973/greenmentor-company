// import React from 'react'

export default function Table() {
  const data = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div>
      <div className="flex p-3 justify-between items-center">
        <h1 className="font-bold text-[15px]">Super-Wise</h1>
        <button className="mt-4 font-bold border border-gray-500 text-[10px] px-6 py-1 rounded">
          Download
        </button>
      </div>

      <table className="w-full border">
        <thead>
          <tr>
            <th className="border text-[12px] text-gray-400 bg-gray-200 p-2">
              Column 1
            </th>
            <th className="border text-[12px] text-gray-400 bg-gray-200 p-2">
              Column 2
            </th>
            <th className="border text-[12px] text-gray-400 bg-gray-200 p-2">
              Column 3
            </th>
            <th className="border text-[12px] text-gray-400 bg-gray-200 p-2">
              Column 4
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, i) => (
            <tr key={i} className="bg-white text-center">
              <td className="border p-4">{ele} 1</td>
              <td className="border p-4">{ele} 2</td>
              <td className="border p-4">{ele} 3</td>
              <td className="border p-4">{ele} 4</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
