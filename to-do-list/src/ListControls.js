export const ListControls = (props) => {
    const {deleteAllItems,showAllItems, showIncTasks, showCompletedTasks, deleteCompletedTasks} = props;

    return (
        <div>
            <button onClick={showIncTasks}>Show Incomplete Tasks</button>
            <button onClick={showCompletedTasks}>Show Completed Tasks</button>
            <button onClick={showAllItems}>Show All Tasks</button>
            <button onClick={deleteCompletedTasks}>Delete Completed Tasks</button>
            <button onClick={deleteAllItems}>Delete All Tasks</button>
        </div>
    )
}