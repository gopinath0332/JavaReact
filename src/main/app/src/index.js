import React, {Component} from "react";
import ReactDOM from "react-dom";
import css from "./index.less";

class App extends Component {
    render() {
        console.log("css-123",css);
        return (
            <div id="app" className={css.test}>
                <div> App component - 12
                    <img src="./resources/images/download.png"/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("content"));