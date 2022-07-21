import React from 'react';
import { ListItem } from './ListItem';

class Input extends React.Component {
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
        console.log(document.getElementById('input'));
        document.getElementById('input').value = "";
      }

      render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input id='input' value={this.state.item} type="text" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
                <ListItem items={this.state.items}/>
            </div>
        )
      }

}

export default Input;