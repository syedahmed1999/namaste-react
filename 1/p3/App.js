/**
 * create element takes 3 parameters
 * tag
 * object
 *      -attributes to tag
 * content (inner html)
 */
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world seperation"
);

/**
 * create root is a DOM method
 * takes the node of html as a paramter
 */
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
