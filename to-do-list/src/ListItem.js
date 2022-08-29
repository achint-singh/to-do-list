// import React, {useState} from "react";
import "./listItem.css";

export const ListItem = (props) => {
    const {items, deleteItem, editItem, onSave, handleEditedInput, cancelEdit,
        handleCheck, isChecked, renderCheck} = props;
        
    return (
        <div>
            {items.map((item, index) => {
                if (item.editing) {
                    return <div key={index}>
                        <form onSubmit={(e) => onSave(e, item)}>
                            <input id='edit-input' value={item.name} type="text" onChange={(e) => handleEditedInput(e, item)}/>
                            <button type="button" onClick={() => cancelEdit(item)}>Cancel</button>
                            <button type="submit">Save</button>
                        </form>
                    </div>
                } else {
                    return <div key={index}>
                        <input type="checkbox" id={item.name} name={item.name} onChange={(e) => handleCheck(e, item)} checked={renderCheck(item)}></input>
                        <label htmlFor={item.name} className={isChecked(item)}>{item.name}</label>
                        <button onClick={() => editItem(item)}>Edit</button>
                        <button onClick={() => deleteItem(item)}>Delete</button>
                    </div>
                }
            })}
        </div>
    );
}