import { Input } from "./Input";

export const EditItem = (props) => {
    const {index, item, onSave, handleEditedInput, cancelEdit} = props;

    let inputObject = {
        id: 'edit-input',
        value: item.name,
        type: 'text',
        onChange: (e) => handleEditedInput(e, item),
        ariaLabel: 'Edit to-do item.'
    };

    let buttonObject = [{
        onClick: cancelEdit(item),
        label: 'Cancel'
    }, {
        onClick: (e) => onSave(e, item),
        label: 'Save'
    }];

    return (
        <div key={index}>
            <Input input={inputObject} button={buttonObject}/>
            {/* <input id='edit-input' value={item.name} type="text" onChange={(e) => handleEditedInput(e, item)}/>
            <button type="button" onClick={() => cancelEdit(item)}>Cancel</button>
            <button type="button" onClick={(e) => onSave(e, item)}>Save</button> */}
        </div>
    );
}