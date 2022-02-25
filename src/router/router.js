import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../style/main.scss";
import Home from "../pages/home/home";
export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/about"></Route>
        <Route path="/users"></Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
