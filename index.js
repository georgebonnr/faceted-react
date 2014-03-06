/** @jsx React.DOM */
var FacetedSearch = React.createClass({
  render: function () {
    return <input ref="query" type="search"></input>
  },

  _parseTerms: function () {
    var query = this.refs.query.getDOMNode().value;
    var terms = query.match(/(\w+(?::|$)(?: ?\b\w+\b(?!:))*)+/g);

    if (terms) return terms.map(function (t) {
      return t.split(':').map(function (s) {
        return s.trim();
      });
    });
  }
});
