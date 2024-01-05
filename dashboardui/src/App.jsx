import Sidebar from "./Components/Sidebar";
import "./App.css";
import Navbar from "./Components/Navbar";
import SmallCard from "./Components/SmallCard";
import Charts from "./Components/Charts";
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
      </div>
    </div>
  );
}
