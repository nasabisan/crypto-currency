import { BrowserRouter, Routes , Route } from "react-router-dom";
import Login from './Login/Login';
import Main from './Main/Main';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
