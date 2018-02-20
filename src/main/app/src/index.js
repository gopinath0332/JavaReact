import React,{Component} from "react";
import ReactDOM from "react-dom";
class  App extends  Component{
    render(){
        return(
            <div> App component - 123
            <image src="./resources/images/download.png"/>
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById("content"));