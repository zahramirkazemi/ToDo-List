import { useState } from 'react';
import TaskInput from './TaskInput';
import TasksList from './TasksList';

const Card = (props) => {    
    const [tasks, setTasks] = useState('');

    const addTask = task => {
        if (!task.title || /^\s*$/.test(task.title)) {
          return;
        }
    
        const newTasks = [task, ...tasks];
        
        setTasks(newTasks);
    };

    const removeTask = id => {
        const removedTasks = [...tasks].filter(task => task._id !== id);    
        setTasks(removedTasks);
    };

    const completeTask = id => {
        let updatedTasks = tasks.map(task => {
          if (task._id === id) {
            task.completed = !task.completed;
          }
          return task;
        });
        setTasks(updatedTasks);
    };

    return ( 
        <div className="w-5/6 md:w-3/4 lg:w-1/2 mt-16 rounded-lg mx-auto p-6 bg-primary text-center flex flex-col gap-8">
          <h1 className='sm:text-2xl text-lg text-white font-bold'>{props.cardTitel}</h1>
          <TaskInput addTask={addTask}/>
          <TasksList
            tasks={tasks}
            completeTask={completeTask}
            removeTask={removeTask}
            />
        </div>
    );
}
 
export default Card;