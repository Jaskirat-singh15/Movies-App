import Navbar from "./Navbar";
// import Test1 from "./Test1"
// import Test2 from "./Test2"
import Category from "./Category";
import Search from "./Search";
import Table from "./table";
import React from "react";
function App(props) {
  return (
    <React.Fragment>
      <Navbar />
      <div className="row p-4">
        <div className="col-2">
          <Category />
        </div>
        <div className = " col-10">
          <div className = "row">
            <div className="col-3">
              <Search/>
            </div>
          </div>
          <div className = "row">
         <div className = "col-8">
         <Table/>
         </div>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
