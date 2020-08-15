import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Table from './components/Table';
import Search from './components/Search';
import users from "./users.json";

function App() {
  const [sortCol, setSortCol] = useState("");
  const [sortDir, setSortDir] = useState("asc");
  const [search, setSearch] = useState("");

  const onSort = function (col) {
    setSortCol(col);
    if (sortDir === "asc") {
      setSortDir("desc")
    } else {
      setSortDir("asc")
    }
    
  }

  let displayedUsers = users.filter(function(user){
    if(user.firstName.toLowerCase().includes(search.toLowerCase())){
      return true;
    }
    if(user.lastName.toLowerCase().includes(search.toLowerCase())){
      return true;
    }
    if(user.role.toLowerCase().includes(search.toLowerCase())){
      return true;
    }
    return false;
  
  });

  if (sortDir === "asc") {
    displayedUsers.sort(function (u1, u2) {
      if (u1[sortCol] > u2[sortCol]) {
        return 1;
      }
      if (u1[sortCol] < u2[sortCol]) {
        return -1;
      }
      return 0;
    })
  } else {
    displayedUsers.sort(function (u1, u2) {
      if (u1[sortCol] > u2[sortCol]) {
        return -1;
      }
      if (u1[sortCol] < u2[sortCol]) {
        return 1;
      }
      return 0;
    })
  }

  const handleInputChange = function (event) {
    console.log(event.target);
    setSearch(event.target.value);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Search onChange = {handleInputChange}/>
        <Table users={displayedUsers} onSort={onSort} />
      </div>
    </div>
  );


}



export default App;
