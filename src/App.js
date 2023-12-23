import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MobilePage from "./pages/MobilePage";
import SearchPage from "./pages/SearchPage";
import Navbar from "./components/Navbar";
import { useStateValue } from "./StateProvider";
import Cart from "./components/Cart";
import { useEffect } from "react";

function App() {
  const [{ showCart }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        <Navbar />
        {showCart && <Cart />}
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/search" Component={SearchPage} />
          <Route path="/mobile" Component={MobilePage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
