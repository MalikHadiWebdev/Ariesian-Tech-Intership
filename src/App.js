import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import "./style/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task1 from "./pages/Tasks/Task1";
import Task2 from "./pages/Tasks/Task2";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Task3 from "./pages/Tasks/Task3";
import Task4 from "./pages/Tasks/Task4";
import Task5 from "./pages/Tasks/Task5";
import Task6 from "./pages/Tasks/Task6";
import Alltasks from "./pages/Tasks/Alltasks";
import Offerletter from "./pages/Tasks/Offerletter";

function App() {
  return (
    <div className="bg-secondary d-flex flex-column">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/about" element={<About />} exact></Route>
          <Route path="/task1" element={<Task1 />} exact></Route>
          <Route path="/task2" element={<Task2 />} exact></Route>
          <Route path="/task3" element={<Task3 />} exact></Route>
          <Route path="/task4" element={<Task4 />} exact></Route>
          <Route path="/task5" element={<Task5 />} exact></Route>
          <Route path="/task6" element={<Task6 />} exact></Route>
          <Route path="/taskspdf" element={<Alltasks />} exact></Route>
          <Route path="/offerletter" element={<Offerletter />} exact></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
