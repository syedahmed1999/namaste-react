const h1 = React.createElement("div", { id: "grandParent" }, [
  React.createElement("div", { id: "parent1" }, [
    React.createElement("h1", { id: "p1c1" }, "H1 1"),
    React.createElement("h2", { id: "p1c2" }, "H2 1"),
  ]),
  React.createElement("div", { id: "parent2" }, [
    React.createElement("h1", { id: "p2c1" }, "H1 2"),
    React.createElement("h2", { id: "p2c2" }, "H2 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(h1);
