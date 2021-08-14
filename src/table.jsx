import React from "react";

class Table extends React.Component {
  state = {
    AllMovies: [
      {
        title: "Terminator",
        genre: "action",
        stock: "2",
        rate: "4.6",
      },
      {
        title: "Die hard",
        genre: "action",
        stock: "3",
        rate: "3.9",
      },
      {
        title: "Get Out",
        genre: "thriller",
        stock: "1",
        rate: "2",
      },
      {
        title: "Trip to italy",
        genre: "comedy",
        stock: "5",
        rate: "2.2",
      },
      {
        title: "Trip to italy",
        genre: "comedy",
        stock: "5",
        rate: "2.2",
      }, {
        title: "Trip to italy",
        genre: "comedy",
        stock: "5",
        rate: "2.2",
      }, {
        title: "Trip to italy",
        genre: "comedy",
        stock: "5",
        rate: "2.2",
      }
    ],
  };

  render() {
      
        let numberOfPages = Math.ceil(this.state.AllMovies.length/5);
        let arr = []
        for(let i =1 ; i<=numberOfPages; i++){
            arr.push(i);
        }
      
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
              {
                  this.state.AllMovies.map((el)=>{
                      return(<tr>
                        <td>{el.title}</td>
                        <td>{el.genre}</td>
                        <td>{el.stock}</td>
                        <td>{el.rate}</td>
                        
                        <td>Like</td>
                        <td>
                          <button type="button" class="btn btn-danger">
                            Delete
                          </button>
                        </td>
                      </tr>);
                  })
              }
            
          </tbody>
        </table>

        <nav aria-label="Page navigation example">
          <ul class="pagination">
          <li class="page-item">
                        <a class="page-link" href="#">
                         Previous
                        </a>
                      </li>
              {
                  arr.map(function(el){
                      return(
                        <li class="page-item">
                        <a class="page-link" href="#">
                          {el}
                        </a>
                      </li>
                      );
                  })
              }

            
            <li class="page-item">
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
