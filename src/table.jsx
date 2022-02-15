import React from "react";

class Table extends React.Component {
  state = {
    AllMovies: [],
    currPage: 1,
    
  };

  componentDidMount() {
    fetch("/movies")
      .then(function (res) {
        return res.json();
      })
      .then((json) => {
        this.setState({ AllMovies: json });

        this.props.sendData(json.length)
      });
  }

  render() {
    
    let moviesToDisplay = [];
    
    if(this.props.genre != "All Genre"){
      moviesToDisplay = this.state.AllMovies.filter((el)=>{
        return el.genre.name == this.props.genre;
      });

    }
    else{
      moviesToDisplay = this.state.AllMovies;
    }

    if(this.props.searchString){
      let strToCompare = this.props.searchString.toLowerCase()

     moviesToDisplay = moviesToDisplay.filter((el)=>{
        return el.title.toLowerCase().includes(strToCompare);
      });
    }
    


    let numberOfPages = Math.ceil(moviesToDisplay.length / 5);
    let arr = [];
    for (let i = 1; i <= numberOfPages; i++) {
      arr.push(i);
    }

    let starting = (this.state.currPage - 1) * 5;
    let ending = this.state.currPage * 5 - 1;

     moviesToDisplay = moviesToDisplay.slice(
      starting,
      Math.min(ending, moviesToDisplay.length - 1) + 1);

    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {moviesToDisplay.map((el) => {
              return (
                <tr key={el._id}>
                  <td>{el.title}</td>
                  <td>{el.genre.name}</td>
                  <td>{el.numberInStock}</td>
                  <td>{el.dailyRentalRate}</td>

                  <td
                    onClick={() => {
                      let AllMovies = this.state.AllMovies;

                      let index = AllMovies.findIndex((e) => {
                        return e._id == el._id;
                      });

                      AllMovies[index].liked
                        ? (AllMovies[index].liked = false)
                        : (AllMovies[index].liked = true);

                      this.setState({ AllMovies: AllMovies });
                    }}
                  >
                    {el.liked ? "liked!" : "like"}
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => {
                        let AllMovies = this.state.AllMovies;
                        AllMovies = AllMovies.filter((eli) => {
                          return eli._id != el._id;
                        });
                        
                        this.props.sendData(AllMovies.length);
                        this.setState({ AllMovies: AllMovies });
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li
              class="page-item"
              onClick={(el) => {
                this.setState({
                  currPage: Math.max(1, this.state.currPage - 1),
                });
              }}
            >
              <a class="page-link" href="#">
                Previous
              </a>
            </li>

            {arr.map((el) => {
              return (
                <li
                  class="page-item"
                  onClick={() => {
                    this.setState({ currPage: el });
                  }}
                >
                  <a class="page-link" href="#">
                    {el}
                  </a>
                </li>
              );
            })}

            <li
              class="page-item"
              onClick={() => {
                this.setState({
                  currPage: Math.min(numberOfPages, this.state.currPage + 1),
                });
              }}
            >
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Table;
