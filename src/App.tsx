import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { FirebaseContext } from "./context/firebaseContext";
import { TemaContext } from "./context/TemaContext";
import { TodoContext } from "./context/TodoContext";
import Dashboard from "./pages/dashboard/dashboard";
import { TodoService } from "./utils/TodoService";
import { auth, db } from "./firebaseConfig";
import React, { useContext } from "react";
import Login from "./pages/login/login";
import { Api } from "./utils/api/api";
import Sobre from "./pages/sobre";
import Todo from "./pages/todo";
import Home from "./pages/home";
import "./App.css";



function App() {
  const api: Api = new Api(db, auth)
  const tema = useContext(TemaContext)
  const todoService: TodoService = new TodoService()

  const renderizarBotoes = () => (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/todo">Todo</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </div>
  );

  return (
    <FirebaseContext.Provider value={({ api })}>
      <TemaContext.Provider value={'dark'}>
        <Router>
          {renderizarBotoes()}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={
              <TodoContext.Provider value={{ todoService }}>
                <Todo />
              </TodoContext.Provider>
            } />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </TemaContext.Provider>
    </FirebaseContext.Provider>
  );
}

export default App;
