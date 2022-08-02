import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header";
import Home from "./layout/Home";
import Sidebar from "./layout/SideBar";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Form />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;