const parentSiblings = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
// root.render(heading);
// root.render(parent);
// root.render(siblings);
root.render(parentSiblings);

//# sourceMappingURL=index.cfbdc8c6.js.map
