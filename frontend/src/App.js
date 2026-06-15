import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HarshitaSite from "@/components/HarshitaSite";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HarshitaSite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
