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
            item: '',
            items: [...this.state.items, this.state.item]
        });
    }

    deleteItem = (deletedItem) => {
        console.log(deletedItem);
        console.log('here');
        let filteredItems = this.state.items.filter((item) => {
            console.log(item[0] === deletedItem[0]);
            return item !== deletedItem
        });
        console.log(filteredItems);
        this.setState({
            items: [...filteredItems]
        });
        console.log(this.state.items);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input id='input' value={this.state.item} type="text" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
                <ListItem items={this.state.items} deleteItem={this.deleteItem}/>
            </div>
        )
    }

}

export default Input;