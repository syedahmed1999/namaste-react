import React from "react";
import ReactDOM from "react-dom/client";

const parentSiblings = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag"),
    ]),
]);

// jsx JS XML (it is not html, it is html like syntax)
const jsx = <h1>Hello world</h1>


// functional component (capital firstletter)
// returns some jsx

const HeadingComponent = () => {
    return (
        <div>
            {a}
            <h1>functional component </h1>
            <TitleComponent />
        </div>
    )
}


const TitleComponent = () => {
    return (
        <div>title</div>
    )
}



// part two

// how to put element into react conponent

let a = (<h1>title element</h1>);

// write any js code in this => {}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />)
