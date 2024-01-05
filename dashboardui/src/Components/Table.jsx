// import React from 'react'

export default function Table() {
  const data = [
    {
      supplier: "Adani",
      year: "2023",
      emmision: "24",
      mom: "25%",
    },
    {
      supplier: "Ambani",
      year: "2023",
      emmision: "25",
      mom: "27%",
    },
    {
      supplier: "PwC",
      year: "2023",
      emmision: "32",
      mom: "24%",
    },
    {
      supplier: "Vijaya steels",
      year: "2023",
      emmision: "38",
      mom: "28%",
    },
    {
      supplier: "Tata",
      year: "2023",
      emmision: "37",
      mom: "34%",
    },
    {
      supplier: "Visaka Steel",
      year: "2023",
      emmision: "45",
      mom: "67%",
    },
    {
      supplier: "Alibaba",
      year: "2023",
      emmision: "58",
      mom: "54%",
    },
  ];
  return (
    <div className="w-full">
      {/* <div className="flex flex-col"> */}
      <div className="flex p-3 justify-between items-center">
        <h1 className="font-bold text-lg">Super-Wise</h1>
        <button className="mt-4 font-bold border border-gray-500 text-sm px-6 py-1 rounded">
          Download
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead>
            <tr>
              <th className="border text-sm text-gray-400 bg-gray-200 p-2">
                SUPPLIER
              </th>
              <th className="border text-sm text-gray-400 bg-gray-200 p-2">
                YEAR
              </th>
              <th className="border text-sm text-gray-400 bg-gray-200 p-2">
                EMISSION/REVENUE RATIO
              </th>
              <th className="border text-sm text-gray-400 bg-gray-200 p-2">
                MOM
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele, i) => (
              <tr key={i} className="bg-white text-center">
                <td className="border p-4">{ele.supplier}</td>
                <td className="border p-4">{ele.year}</td>
                <td className="border p-4">{ele.emmision}</td>
                <td className="border p-4">{ele.mom}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* </div> */}
    </div>
  );
}
