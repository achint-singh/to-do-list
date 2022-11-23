export const Item = (props) => {
    const {index, item, handleCheck, renderCheck, isChecked, editItem, deleteItem} = props;
    return (
        <div key={index}>
            <input type="checkbox" id={item.name} name={item.name} onChange={(e) => handleCheck(e, item)} checked={renderCheck(item)}></input>
            <label htmlFor={item.name} className={isChecked(item)}>{item.name}</label>
            <button onClick={() => editItem(item)}>Edit</button>
            <button onClick={() => deleteItem(item)}>Delete</button>
        </div>
    );
}