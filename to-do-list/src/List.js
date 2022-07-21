import React from 'react';
import "./List.css";
import {Header} from './Header';

class ToDoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {item: '', items: []};
  }

  handleChange = (event) => {
    this.setState({ item: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      singleItem: '',
      items: [...this.state.items, this.state.item]
    });
  }


  render() {
    return (
      <div className="to-do-list">
        <Header/>
        <form onSubmit={this.onSubmit}>
          <input id='input 'value={this.state.item} type="text" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
        <ul>{this.state.items.map((item, index) => <li key={index}>{item}</li>)}</ul>
      </div>
    );
  }
}

export default ToDoList;
