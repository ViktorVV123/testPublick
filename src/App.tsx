import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link, HashRouter, Routes
} from "react-router-dom";
import './App.css';
import {TableMain} from "./components/TableMain/TableMain";

function App() {
  return (
      <HashRouter>

        <Routes>
          <Route path="/" element={<TableMain  />}/>
        </Routes>
      </HashRouter>

  );
}

export default App;
