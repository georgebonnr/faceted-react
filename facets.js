/** @jsx React.DOM */
var facets = {
  user: ['Foo','Randall','George'],
  age: ['24','26','48']
};

React.renderComponent(
  <FacetedSearch />,
  document.body
);
