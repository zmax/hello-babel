import React, {Component} from 'react';

export var TodoList = class TodoList extends Component {
    render() {
        var createItem = function(itemText, index) {
            return <li key={index}>{itemText}</li>;
        };
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
}

export default class TodosApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items:[],
            text: ''
        };
    }

    onChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        var nextItems = this.state.items.concat([this.state.text]);
        var nextText = '';
        this.setState({items: nextItems, text: nextText});
    }

    render() {
        return (
          <div className="col-md-6">
            <h3>TODO</h3>
            <TodoList items={this.state.items} />
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="input-group">
                    <input onChange={this.onChange.bind(this)} value={this.state.text} type="text" className="form-control" placeholder="do something..." />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button" onClick={ (e) => this.handleSubmit(e) }>{'Add #' + (this.state.items.length + 1)}</button>
                    </span>
                </div>
            </form>
          </div>
        );
    }
}
