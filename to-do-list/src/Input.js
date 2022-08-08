import React, {useState} from 'react';
import { ListItem } from './ListItem';

export const Input = () => {
    const [inputItem, setInputItem] = useState({'name': '', 'editing': false, 'uuid': -1});
    const [items, setItems] = useState([]);
    const [counter, setCounter] = useState(0);
    
    const handleChange = (event) => {
        let uuid = counter + 1;
        setCounter(uuid);
        let newItem = {
            'name':event.target.value,
            'editing': false,
            'uuid': counter
        };
        setInputItem(newItem);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setItems([...items, inputItem]);
        setInputItem({'name': '', 'editing': false, 'uuid': -1});
    }

    const editItem = (editingItem) => {
        const updatedItems = items.map(i => {
            if (i.uuid === editingItem.uuid) {
                return {...i, 'editing': true, 'prevItem': editingItem.name};
            }

            return i;
        });

        setItems(updatedItems);
    }

    const onSave = (event, item) => {
        event.preventDefault();
        const updatedItems = items.map(i => {
            if (i.uuid === item.uuid) {
                return {...i, 'editing': false};
            }

            return i;
        });
        setItems([...updatedItems]);
    }

    const handleEditedInput = (event, item) => {
        const updatedItems = items.map(i => {
            if (i.uuid === item.uuid) {
                return {...i, 'name': event.target.value};
            }

            return i;
        });
        setItems([...updatedItems]);
    }

    const deleteItem = (deletedItem) => {
        let filteredItems = items.filter((item) => item.uuid !== deletedItem.uuid);
        setItems([...filteredItems]);
    }

    const cancelEdit = (item) => {
        const updatedItems = items.map(i => {
            if (i.uuid === item.uuid) {
                return {...i, 'name': item.prevItem, 'editing': false, 'prevItem': null};
            }

            return i;
        });
        setItems([...updatedItems]);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input id='input' value={inputItem.name} type="text" onChange={handleChange} />
                <button>Submit</button>
            </form>
            <ListItem items={items} deleteItem={deleteItem} editItem={editItem} onSave={onSave} 
            handleEditedInput={handleEditedInput} cancelEdit={cancelEdit}/>
        </div>
    )
}