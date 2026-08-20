import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Activity1 from "./pages/Activity1";
import Activity2 from "./pages/Activity2";
import Activity3 from "./pages/Activity3";
import Activity4 from "./pages/Activity4";
import Activity5 from "./pages/Activity5";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity-1" element={<Activity1 />} />
        <Route path="/activity-2" element={<Activity2 />} />
        <Route path="/activity-3" element={<Activity3 />} />
        <Route path="/activity-4" element={<Activity4 />} />
        <Route path="/activity-5" element={<Activity5 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;