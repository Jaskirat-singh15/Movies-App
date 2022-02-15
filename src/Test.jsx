import React from "react";

class Test extends React.Component{
    constructor(props){
        // one time
        // it was to create state
        super(props);
        this.state = {
            a:1,
        }

        console.log("constructor was called");
    }

    render(){
        console.log("render was called");
        return(
            <div>
                <p className="abc"></p>
                <button onClick={()=>{
                    
                    // document.querySelector(".abc").innerText= "changed";    // render was not called when we dont 
                    //change state
                    
                     this.setState({a:2})
                }
                }>Change state</button>
            </div>
        );
    }

    componentDidMount(){
        // it was to do one time task
        // it will be ignored . study execution context to understand
        console.log("compnent Did mount was called");
    }

    componentDidMount(){
        // it was to do one time task
        console.log("compnent Did mount was called 2");
    }

    componentDidUpdate(){
        // multple time ; after every re-render
        // to do something after every re-render
        console.log("component did update was called");
    }

    componentWillUnmount(){
        // one time
        // when component was just about to removed from screen
        // database se baat krte hai , uske baad coonecction close krne ke liye
        
    }
}
export default Test;