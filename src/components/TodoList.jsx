import React from 'react'

const TodoList = ({taskList, setTaskList}) => {

    const handleCompleted = (id) => {
        setTaskList(taskList.map((task) => {
            if (id === task.id) {
                return {
                    ...task,
                    completed: !task.completed,
                };
            }
            return task;
        }))
    };

  return (
    <div className='todos container-fluid d-flex flex-column bg-success p-2 text-dark bg-opacity-10 mb-3'>
        {taskList.map((task, index) => (
        <div className={`todo ${task.completed ? "completed" : ""}`} key={index} style={{ border: 'lefColor'}}>
            <div className="p-2 bd-highlight">
                <h6 style={{ fontWeight: 'bold' }}>{task.text}</h6>
                <h6 style={{ fontStyle: 'italic' }}>Deadline: {task.deadline}</h6>
                <button onClick={()=>handleCompleted(task.id)}>
                    <i className="fas fa-check"></i>
                </button>
            </div>
        </div>
        ))}
    </div>
  )
}

export default TodoList