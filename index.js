import "./index.css";
import Header from "./Header";
import Cuerpo from "./Cuerpo";
import data from "./data/data";

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <Cuerpo tasks={data} />
    </div>
  );
}

