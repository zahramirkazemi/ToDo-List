import { useState } from "react";

const TaskInput = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const handleChange = e => {
        setInput(e.target.value);
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        
        props.addTask({
          _id: Date.now().toString(),
          title: input,
          completed: false
        });

        setInput('');
    };

    return ( 
        <div className="w-5/6 sm:w-2/3 md:w-3/5 m-auto">
            <input onChange={handleChange} value={input} className="w-5/6 border border-secondary h-9 bg-primary text-white px-3 sm:text-sm text-xs rounded-l-md focus-visible:outline-none"></input>
            <button onClick={handleSubmit} className="bg-secondary text-white w-1/6 h-9 sm:text-sm text-xs rounded-r-md">Add</button> 
        </div>
    );
}
 
export default TaskInput;