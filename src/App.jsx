import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-Poppins">
      <HomePage />
    </div>
  );
}

export default App;
