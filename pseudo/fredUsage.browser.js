import Fred from "fred-svg";

// const stringContainingXMLSource = ... ;

const parser = new DOMParser();
const svgDOM = parser.parseFromString(stringContainingXMLSource, "image/svg+xml");

const fred = new Fred(svgDOM);

fred.
