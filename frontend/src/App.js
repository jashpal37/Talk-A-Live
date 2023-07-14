import "./App.css";
import Home from "./pages/Home";
import ChatPage from "./pages/ChatPage";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/chats" element={<ChatPage />} />
        </Routes>
    </div>
  );
}

export default App;
