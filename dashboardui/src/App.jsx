import Sidebar from "./Components/Sidebar";
import "./App.css";
import Navbar from "./Components/Navbar";
import SmallCard from "./Components/SmallCard";
import Charts from "./Components/Charts";
import Table from "./Components/Table";
export default function App() {
  return (
    <div className="main_container">
      <div className="side_bar">
        <Sidebar />
      </div>
      <div className="content">
        <Navbar />
        <div className="card_cart">
          <SmallCard />
          <Charts />
        </div>
        {/* table will be here */}

        <div className="main-hart-table">
          <div className="chart-data">1</div>
          <div className="table-content">
            {" "}
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}
// {/* <Table /> */}
// {/* <Table /> */}
