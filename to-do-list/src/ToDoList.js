import React, {useState} from 'react';
import {Header} from './Header';
import { ListItems } from './ListItems';
import { ListControls } from './ListControls';
import { Input } from './Input';

export const ToDoList = () => {
    const [inputItem, setInputItem] = useState({'name': '', 'completed': false, 'editing': false, 'uuid': -1});
    const [filter, setFilter] = useState('all');
    const [items, setItems] = useState([]);
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

        setItems(updatedItems);
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

    const cancelEdit = (item) => {
        const updatedItems = items.map(i => {
            if (i.uuid === item.uuid) {
                return {...i, 'name': item.prevItem, 'editing': false, 'prevItem': null};
            }

            return i;
        });

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

        setItems([...updatedItems]);
    }

    const deleteItem = (deletedItem) => {
        let filteredItems = items.filter((item) => item.uuid !== deletedItem.uuid);
        setItems([...filteredItems]);
    }

    // functions that handle editing the list entirely
    const deleteAllItems = () => {
        setItems([]);
    }

    const showAllItems = () => {
        setFilter('all');
    }

    const showIncTasks = () => {
        setFilter('incomplete');
    }

    const showCompletedTasks = () => {
        setFilter('complete');
    }

    const deleteCompletedTasks = () => {
        let completedTasks = items.filter((item) => !item.completed);
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

        setItems(updatedItems);
    }

    const isChecked = (item) => {
        return item.completed ? "checked-item" : "not-checked-item"
    }

    const renderCheck = (item) => {
        return item.completed ? true : false;
    }

    let inputObject = {
        id: 'input',
        value: inputItem.name,
        type: 'text',
        onChange: handleChange,
        ariaLabel: 'Enter to-do item.',

    };

    let buttonObject = [{
        onClick: onSubmit,
        label: 'Submit'
    }]


    return (
        <div className="to-do-list">
            <Header heading="To Do List"/>

            <ListControls deleteAllItems={deleteAllItems} showAllItems={showAllItems} showIncTasks={showIncTasks}
            showCompletedTasks={showCompletedTasks} deleteCompletedTasks={deleteCompletedTasks}/>

            {/* <input id='input' value={inputItem.name} type="text" onChange={handleChange} />
            <button onClick={onSubmit}>Submit</button> */}

            <Input input={inputObject} buttons={buttonObject}/>

            <ListItems items={items} handleCheck={handleCheck} isChecked={isChecked} renderCheck={renderCheck}
            deleteItem={deleteItem} editItem={editItem} onSave={onSave} 
            handleEditedInput={handleEditedInput} cancelEdit={cancelEdit} filter={filter}/>
        </div>
    )
}