import React, {useState} from "react";
import "./listItem.css";

export const ListItem = (props) => {
    const {items, deleteItem} = props;
    const [checked, setChecked] = useState([]);

    const handleCheck = (event, item) => {
        let completedList = [...checked];
        if (event.target.checked) {
            completedList = [...checked, item];
        } else {
            completedList.splice(checked.indexOf(item), 1);
        }
        setChecked(completedList);
    }

    const isChecked = (item) => {
        return checked.includes(item) ? "checked-item" : "not-checked-item"
    }

    return (
        <div>
            {items.map((item, index) => 
            <div key={index}>
                <input type="checkbox" id={item} name={item} onChange={(event) => handleCheck(event,item)}></input>
                <label htmlFor={item} className={isChecked(item)}>{item}</label>
                <button onClick={() => deleteItem(item)}>Delete</button>
            </div>)}
        </div>
    );
}