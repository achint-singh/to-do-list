import "./listItem.css";
import { EditItem } from "./EditItem";
import { Item } from "./Item";

export const ListItems = (props) => {
    const {items, deleteItem, editItem, onSave, handleEditedInput, cancelEdit,
        handleCheck, isChecked, renderCheck, filter} = props;

    let listItems = items;
    if (filter === 'complete') {
        listItems = items.filter((item) => item.completed);
    } else if (filter === 'incomplete') {
        listItems = items.filter((item) => !item.completed);
    }
        
    return (
        <div>
            {listItems.map((item, index) => {
                return item.editing ? <EditItem key={index} item={item} onSave={onSave} handleEditedInput={handleEditedInput} cancelEdit={cancelEdit}/> :
                <Item key={index} item={item} handleCheck={handleCheck} renderCheck={renderCheck} isChecked={isChecked} editItem={editItem} deleteItem={deleteItem}/>
            })}
        </div>
    );
}