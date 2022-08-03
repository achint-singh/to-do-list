export const ListItem = (props) => {
    let {items, deleteItem} = props;
    return (
        <ul>
            {items.map((item, index) => 
            <li key={index}>
                {item}
                <button onClick={() => deleteItem(item)}>Delete</button>
            </li>)}
        </ul>
    );
}