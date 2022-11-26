import React, {useState} from 'react';
import {Header} from './Header';
import { ListItems } from './ListItems';
import { ListControls } from './ListControls';

export const ToDoList = () => {
    const [inputItem, setInputItem] = useState({'name': '', 'completed': false, 'editing': false, 'uuid': -1});
    const [items, setItems] = useState([]);
    const [allItems, setAllItems] = useState([]);
    const [counter, setCounter] = useState(0);
    
    // functions to handle entering initial input
    const handleChange = (event) => {
        let uuid = counter + 1;
        setCounter(uuid);
        let newItem = {
            'name':event.target.value,
            'completed': false,
            'editing': false,
            'uuid': counter
        };
        setInputItem(newItem);
    }

    const onSubmit = () => {
        setAllItems([...items, inputItem]);
        setItems([...items, inputItem]);
        setInputItem({'name': '', 'completed': false, 'editing': false, 'uuid': -1});
    }

    // functions to handle editing an item
    const editItem = (editingItem) => {
        const updatedItems = items.map(i => {
            if (i.uuid === editingItem.uuid) {
                return {...i, 'editing': true, 'prevItem': editingItem.name};
            }

            return i;
        });

        const updatedAllItems = allItems.map(i => {
            if (i.uuid === editingItem.uuid) {
                return {...i, 'editing': true, 'prevItem': editingItem.name};
            }

            return i;
        });

        setAllItems([...updatedAllItems]);
        setItems(updatedItems);
    }

    const handleEditedInput = (event, item) => {
        const updatedItems = items.map(i => {
            if (i.uuid === item.uuid) {
                return {...i, 'name': event.target.value};
            }

            return i;
        });

        const updatedAllItems = allItems.map(i => {
            if (i.uuid === item.uuid) {
                return {...i, 'name': event.target.value};
            }

            return i;
        });
        
        setAllItems([...updatedAllItems]);
        setItems([...updatedItems]);
    }

    const cancelEdit = (item) => {
        const updatedItems = items.map(i => {
            if (i.uuid === item.uuid) {
                return {...i, 'name': item.prevItem, 'editing': false, 'prevItem': null};
            }

            return i;
        });

        const updatedAllItems = allItems.map(i => {
            if (i.uuid === item.uuid) {
                return {...i, 'name': item.prevItem, 'editing': false, 'prevItem': null};
            }

            return i;
        });

        setAllItems([...updatedAllItems]);
        setItems([...updatedItems]);
    }

    const onSave = (event, item) => {
        event.preventDefault();
        const updatedItems = items.map(i => {
            if (i.uuid === item.uuid) {
                return {...i, 'completed': false, 'editing': false};
            }

            return i;
        });

        const updatedAllItems = allItems.map(i => {
            if (i.uuid === item.uuid) {
                return {...i, 'completed': false, 'editing': false};
            }

            return i;
        });

        setAllItems([...updatedAllItems]);
        setItems([...updatedItems]);
    }

    const deleteItem = (deletedItem) => {
        let filteredItems = items.filter((item) => item.uuid !== deletedItem.uuid);
        let filteredAllItems = allItems.filter((item) => item.uuid !== deletedItem.uuid);
        setAllItems([...filteredAllItems]);
        setItems([...filteredItems]);
    }

    // functions that handle editing the list entirely
    const deleteAllItems = () => {
        setAllItems([]);
        setItems([]);
    }

    const showAllItems = () => {
        setItems(allItems);
    }

    const showIncTasks = () => {
        let incTasks = allItems.filter((item) => !item.completed);
        setItems([...incTasks]);
    }

    const showCompletedTasks = () => {
        let completedTasks = allItems.filter((item) => item.completed);
        setItems([...completedTasks]);
    }

    const deleteCompletedTasks = () => {
        let completedTasks = allItems.filter((item) => !item.completed);
        setAllItems([...completedTasks]);
        setItems([...completedTasks]);
    }


    // functions that handle checking an item off the list
    const handleCheck = (event, item) => {
        const updatedItems = items.map(i => {
            if (i.uuid === item.uuid) {
                return {...i, 'completed': event.target.checked}
            }
            return i;
        });

        setAllItems(updatedItems);
        setItems(updatedItems);
    }

    const isChecked = (item) => {
        return item.completed ? "checked-item" : "not-checked-item"
    }

    const renderCheck = (item) => {
        return item.completed ? true : false;
    }

    return (
        <div className="to-do-list">
            <Header heading="To Do List"/>

            <ListControls deleteAllItems={deleteAllItems} showAllItems={showAllItems} showIncTasks={showIncTasks}
            showCompletedTasks={showCompletedTasks} deleteCompletedTasks={deleteCompletedTasks}/>

            <input id='input' value={inputItem.name} type="text" onChange={handleChange} />
            <button onClick={onSubmit}>Submit</button>

            <ListItems items={items} handleCheck={handleCheck} isChecked={isChecked} renderCheck={renderCheck}
            deleteItem={deleteItem} editItem={editItem} onSave={onSave} 
            handleEditedInput={handleEditedInput} cancelEdit={cancelEdit}/>
        </div>
    )
}