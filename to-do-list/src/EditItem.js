export const EditItem = (props) => {
    const {index, item, onSave, handleEditedInput, cancelEdit} = props;
    return (
        <div key={index}>
            <input id='edit-input' value={item.name} type="text" onChange={(e) => handleEditedInput(e, item)}/>
            <button type="button" onClick={() => cancelEdit(item)}>Cancel</button>
            <button type="button" onClick={(e) => onSave(e, item)}>Save</button>
        </div>
    );
}