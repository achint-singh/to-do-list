export const EditItem = (props) => {
    const {index, item, onSave, handleEditedInput, cancelEdit} = props;
    return (
        <div key={index}>
            {/* TODO: don't need the form here */}
            <form onSubmit={(e) => onSave(e, item)}>
                <input id='edit-input' value={item.name} type="text" onChange={(e) => handleEditedInput(e, item)}/>
                <button type="button" onClick={() => cancelEdit(item)}>Cancel</button>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}