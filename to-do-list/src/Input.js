import React, {useState} from 'react';
import { ListItem } from './ListItem';

export const Input = () => {
    const [item, setItem] = useState('');
    const [items, setItems] = useState([]);
    
    const handleChange = (event) => {
        setItem(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setItem('');
        setItems([...items, item]);
    }

    const deleteItem = (deletedItem) => {
        let filteredItems = items.filter((item) => item !== deletedItem);
        setItems([...filteredItems]);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input id='input' value={item} type="text" onChange={handleChange} />
                <button>Submit</button>
            </form>
            <ListItem items={items} deleteItem={deleteItem}/>
        </div>
    )
}