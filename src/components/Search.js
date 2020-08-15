import React, {useState} from "react";

function Search(props) {

  return (
    <form class="form-inline mt-3 mb-3">
      <input 
        class="form-control mr-sm-2" 
        type="text" placeholder="Search" 
        aria-label="Search" name="search" 
        onChange={props.onChange} 
        // value={props.search} 
      />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  )
}
export default Search;