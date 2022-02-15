import React from "react";

class Category extends React.Component {
  state = {
    Allgenre: ["Romance", "Action", "Thriller", "Horror", "Comedy"],
    
  };

  componentDidMount() {
    // api request marni hai get type ki
    // fetch get type ki request marta hai , ek promise hota hai isliye .then ka use kiya hai
    fetch("/genre")
      .then(function (res) {
        // res.json bhi ek promise return karta hai
        return res.json();
      })
      .then((json) => {
       
        this.setState({Allgenre:json})
      });
  }

  // componentDidMount() {
  //   //api call(msg bhejna=> get)
  //   fetch("/genre")
  //     .then(function (res) {
  //       return res.json();
  //     })
  //     .then((json) => {
  //       this.setState({ Allgenre : json });
        
  //     });
  // }

  render() {
    return (
      <div>
        <ul class="list-group">
        <li class="list-group-item" key="allgenre" onClick={()=>{
          
          this.props.receiveCurrGenre("All Genre")
        }}>
                All Genre
              </li>

          {this.state.Allgenre.map((el) => {
            return (
              <li class="list-group-item" key={el._id} onClick={()=>{
                this.props.receiveCurrGenre(el.name)
              }}>
                {el.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Category;
