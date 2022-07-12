import "./List.css";
import {Header} from './Header';
import {Item} from './Item';

const ToDoList = () => {
  return (
    <div className="to-do-list">
      <Header/>
      <Item addItem={addItem}/>
      <div>
        <ul id="list"></ul>
      </div>
    </div>
  );
};

const addItem = props => {
  let list = props.getElementById("list");
  let listItem = props.createElement("li");
  let text = props.getElementById("input-item").value;

  listItem.appendChild(document.createTextNode(text));
  list.appendChild(listItem);
  props.getElementById("input-item").value = "";
};

export default ToDoList;
