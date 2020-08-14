import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Table from './components/Table';
import Search from './components/Search';
import users from "./users.json";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className="container">
     <Search/>
     <Table users={users}/>
     </div>
    </div>
  );
}

export default App;
