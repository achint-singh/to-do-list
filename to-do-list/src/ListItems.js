import "./listItem.css";
import { EditItem } from "./EditItem";
import { Item } from "./Item";

export const ListItems = (props) => {
    const {items, deleteItem, editItem, onSave, handleEditedInput, cancelEdit,
        handleCheck, isChecked, renderCheck} = props;
        
    return (
        <div>
            {items.map((item, index) => {
                return item.editing ? <EditItem index={index} item={item} onSave={onSave} handleEditedInput={handleEditedInput} cancelEdit={cancelEdit}/> :
                <Item index={index} item={item} handleCheck={handleCheck} renderCheck={renderCheck} isChecked={isChecked} editItem={editItem} deleteItem={deleteItem}/>
            })}
        </div>
    );
}