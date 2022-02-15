import React from "react";

function Search(props) {


  
    return (
      <div>
        <p>showing {props.noOfMovies} movies from the database</p>
        <button type="button" class="btn btn-primary mb-4">
          New
        </button>
        <div class="input-group flex-nowrap mb-2">
          <input type="text" class="form-control" placeholder="Search..." 
          onChange={(e)=>{
             props.receiveSearchParam(e.currentTarget.value);
          }}/>
        </div>
      </div>
    );
  }

export default Search;
