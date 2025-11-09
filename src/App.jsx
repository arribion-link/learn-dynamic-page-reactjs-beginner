import NavBar from "./components/NavBar"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </>
  );
}

export default App
