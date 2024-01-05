import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { parse } from "date-fns";

const LineChart = () => {
  const [chartData] = useState([
    {
      Date: "16/2/23",
      Month: "Feb",
      Year: 2023,
      Supplier: "Adani",
      Emissions: 2205,
      Revenue: 220000,
      E_R: 99.8,
    },
    {
      Date: "17/3/23",
      Month: "Mar",
      Year: 2023,
      Supplier: "Reliance",
      Emissions: 2251,
      Revenue: 254815,
      E_R: 113.2,
    },
    {
      Date: "6/4/23",
      Month: "Apr",
      Year: 2023,
      Supplier: "Shaurya Drugs",
      Emissions: 4522,
      Revenue: 879797,
      E_R: 194.6,
    },
    {
      Date: "12/5/23",
      Month: "May",
      Year: 2023,
      Supplier: "Orlife Healthcare",
      Emissions: 8522,
      Revenue: 464464,
      E_R: 54.5,
    },
    {
      Date: "11/8/23",
      Month: "Aug",
      Year: 2023,
      Supplier: "Rezicure Pharmaceuticals",
      Emissions: 1124,
      Revenue: 548582,
      E_R: 488.1,
    },
    {
      Date: "6/10/23",
      Month: "Oct",
      Year: 2023,
      Supplier: "Steller Bio Labs",
      Emissions: 4524,
      Revenue: 516513,
      E_R: 114.2,
    },
    {
      Date: "8/9/23",
      Month: "Sep",
      Year: 2023,
      Supplier: "Ruzette Organics",
      Emissions: 7858,
      Revenue: 564651,
      E_R: 71.9,
    },
    {
      Date: "11/8/23",
      Month: "Aug",
      Year: 2023,
      Supplier: "Merion Care",
      Emissions: 5258,
      Revenue: 565556,
      E_R: 107.6,
    },
    {
      Date: "10/11/23",
      Month: "Nov",
      Year: 2023,
      Supplier: "Eskos Pharma",
      Emissions: 4524,
      Revenue: 546561,
      E_R: 120.8,
    },
  ]);

  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split("/");
    return parse(`${year}-${month}-${day}`, "yyyy-MM-dd", new Date()).getTime();
  };

  const [chartOptions, setChartOptions] = useState({
    chart: {
      height: 350,
      type: "line",
    },
    stroke: {
      width: [0, 4],
    },
    title: {
      text: "Emissions/Revenue",
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    xaxis: {
      type: "datetime",
      categories: chartData.map((entry) => parseDate(entry.Date)),
    },
    yaxis: {
      title: {
        text: "Emissions",
      },
    },
  });

  const [chartSeries, setChartSeries] = useState([
    {
      name: "Emissions",
      type: "line",
      data: chartData.map((entry) => entry.Emissions),
    },
  ]);

  useEffect(() => {
    setChartOptions((prevOptions) => ({
      ...prevOptions,
      xaxis: {
        ...prevOptions.xaxis,
        categories: chartData.map((entry) => parseDate(entry.Date)),
      },
    }));
    setChartSeries([
      {
        name: "Emissions",
        type: "line",
        data: chartData.map((entry) => entry.Emissions),
      },
    ]);
  }, [chartData]);

  return (
    <div id="chart">
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={350}
      />
    </div>
  );
};

export default LineChart;
