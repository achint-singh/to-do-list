export const ListItem = (props) => {
    return (
        <ul>
            {props.items.map((item, index) => 
            <li key={index}>
                {item}
                <button onClick={item => props.deleteItem(item)}>Delete</button>
            </li>)}
        </ul>
    );
}