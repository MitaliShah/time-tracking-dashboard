import "./App.css";
import data from "../data.json";

function App() {
  return <>{data.map((data) => console.log(data))}</>;
}

export default App;
