import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import NoMatch from './pages/NoMatch';


function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
