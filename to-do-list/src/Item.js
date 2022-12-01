import { Input } from "./Input";

export const Item = (props) => {
    const {index, item, handleCheck, renderCheck, isChecked, editItem, deleteItem} = props;

    let inputObject = {
        id: item.name,
        type: 'checkbox',
        onChange: (e) => handleCheck(e, item),
        checked: renderCheck(item)
    };

    let buttonObject = [{
        onClick: editItem(item),
        label: 'Edit'
    }, {
        onClick: deleteItem(item),
        label: 'Delete'
    }];

    let labelObject = {
        htmlFor: item.name,
        className: isChecked(item),
        value: item.name
    }

    return (
        <div key={index}>
            <Input input={inputObject} buttons={buttonObject} label={labelObject}/>
            {/* <input type="checkbox" id={item.name} name={item.name} onChange={(e) => handleCheck(e, item)} checked={renderCheck(item)}></input>
            <label htmlFor={item.name} className={isChecked(item)}>{item.name}</label>
            <button onClick={() => editItem(item)}>Edit</button>
            <button onClick={() => deleteItem(item)}>Delete</button> */}
        </div>
    );
}