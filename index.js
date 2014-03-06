/** @jsx React.DOM */
var FacetedSearch = React.createClass({
  render: function () {
    return <input ref="query" type="search" onInput={this.handleInput}></input>
  },
  handleInput: function(){
    var query = this.refs.query.getDOMNode().value;
    var terms = this._parseTerms(query);
  },
  _parseTerms: function (query) {
    var terms = query.match(/(\w+(?::|$)(?: ?\b\w+\b(?!:))*)+/g);

    if (terms) return terms.map(function (t) {
      return t.split(':').map(function (s) {
        return s.trim();
      });
    });

    return [];
  }


});

