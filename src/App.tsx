import Category from "./pages/Category";
import Home from "./pages/Home";
import Play from "./pages/Play";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </div>
  );
};

export default App;
