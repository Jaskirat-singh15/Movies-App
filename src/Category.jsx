import React from "react";

class Category extends React.Component {
  state = {
    Allgenre: ["Romance", "Action", "Thriller", "Horror","Comedy"],
  };

  render() {
    return (

      <div>
        <ul class="list-group">
           {
                this.state.Allgenre.map((el)=>{
                    return  (
                        <li class="list-group-item" key={el}>{el}</li>
                    ) ;
                })
           }
        
         
        </ul>
      </div>
    );
  }
}

export default Category;
