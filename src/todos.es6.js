var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText) {
      return <li>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});
var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div className="col-md-6">
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
            <div className="input-group">
                <input onChange={this.onChange} value={this.state.text} type="text" className="form-control" placeholder="do something..." />
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button">{'Add #' + (this.state.items.length + 1)}</button>
                </span>
            </div>
        </form>
      </div>
    );
  }
});

React.render(<TodoApp />, document.getElementById("todos"));
