import Task from "./Task";


const TasksList = ({ tasks, completeTask, removeTask }) => {
    return ( 
        <div>
            <div className="inline-block w-5/6 sm:w-2/3 md:w-3/5 border-2 rounded-md border-tertiary">
                { tasks === "" || tasks.length === 0 ? <p className="my-3 text-white sm:text-sm text-xs">Take rest! You haven't any task </p> : tasks.map( task => (<Task key={task._id} task={task} completeTask={completeTask} removeTask={removeTask}/>))}                
            </div>
        </div>
     );
}
 
export default TasksList;