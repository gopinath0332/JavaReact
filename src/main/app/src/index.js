import React,{Component} from "react";
import ReactDOM from "react-dom";
class  App extends  Component{
    render(){
        return(
            <div> App component - 123</div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById("content"));