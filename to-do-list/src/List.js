import "./List.css";

const ToDoList = () => {
  return (
    <div className="to-do-list">
      <header>To Do List</header>
      <input id="input-item" type="text"></input>
      <button onClick={e => addItem(e.view.document)}>Add To-Do</button>
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
