import Header from "./Components/Navbar/Header";
import Body from "./Pages/Body";
import { Routes, Route } from "react-router-dom";
import WatchPage from "./Pages/WatchPage";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/watch" element={<WatchPage />} />
      </Routes>
    </>
  );
}

export default App;
