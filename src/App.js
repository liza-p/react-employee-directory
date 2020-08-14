import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Table from './components/Table';
import Search from './components/Search';
import users from "./users.json";

function App() {
  const [sortCol, setSortCol] = useState("");
  const [sortDir, setSortDir] = useState("asc");
  const onSort = function(col){
    setSortCol(col);
    if(sortDir === "asc"){
      setSortDir("desc")
    }else{
      setSortDir("asc")
    }
  

  }

  if(sortDir ==="asc"){
    users.sort(function(u1, u2){
      if (u1[sortCol] > u2[sortCol]) {
        return 1;
      }
      if (u1[sortCol] < u2[sortCol]) {
          return -1;
      }
      return 0;
    })
  }else{
    users.sort(function(u1, u2){
      if (u1[sortCol] > u2[sortCol]) {
        return -1;
      }
      if (u1[sortCol] < u2[sortCol]) {
          return 1;
      }
      return 0;
    })
  }

  return (
    <div className="App">
     <Navbar/>
     <div className="container">
     <Search/>
     <Table users={users} onSort={onSort}/>
     </div>
    </div>
  );
}

export default App;
