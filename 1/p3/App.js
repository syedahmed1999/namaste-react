/**
 * Nested Elements
 *
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am h1 tag")
  )
);

/**
 * Siblings
 */

const siblings = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ])
);

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

/**
 * create element takes 3 parameters
 * tag
 * object
 *      -attributes to tag
 * content (inner html)
 *
 * this is an object
 */
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world seperation"
);

console.log(heading);
/**
 * create root is a DOM method
 * takes the node of html as a paramter
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
// root.render(heading);
// root.render(parent);
// root.render(siblings);
root.render(parentSiblings);
