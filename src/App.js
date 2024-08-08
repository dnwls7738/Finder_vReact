import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Info from "./components/pages/Info";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/info/:tel" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
