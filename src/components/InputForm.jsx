import React, { useState } from 'react';

const Inputform = ({taskList, setTaskList }) => {

    const [ inputTitle, setInputTitle ] = useState("");
    const [ inputDeadline, setInputDeadline ] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setTaskList([
            ...taskList,
            {
                id: taskList.lenghth,
                text: inputTitle,
                deadline: inputDeadline,
                completed: false,
            }
        ]);

        setInputTitle("");
        setInputDeadline("");
    }


    const handleTitleChange = (event) => {
        setInputTitle(event.target.value);
    }
    const handleDeadlineChange = (event) =>{
        setInputDeadline(event.target.value);
    }

    const handleDelete = (id) => {
        setTaskList(taskList.filter((task)=> task.id !== id ));
    }

    const task = taskList; 


    return (
        <div>
            <form className='form-floating mb-3 container-fluid' style={{ width: 600 }} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="formEventTitle" placeholder='Title'></label>
                    <input type="text" id="formEventTitle" className="form-control" placeholder="Title" onChange={handleTitleChange} value={inputTitle} />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="formEventDeadline" placeholder='Deadline'></label>
                    <input type="text" id="formEventDeadline" className="form-control" placeholder="Deadline" onChange={handleDeadlineChange} value={inputDeadline} />
                </div>

                <select className="form-select form-select mb-3">
                    <option placeholder='Status'></option>
                    <option value="1">Done</option>
                    <option value="2">Not started</option>
                    <option value="3">In progress</option>
                </select>

                <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                    <button className="btn btn-secondary btn-lg" onClick={()=>handleDelete(task.id)}>Cancel</button>
                    <button className="btn btn-primary btn-lg">Add New Todo</button>
                </div>
            </form>
        </div>
    )
}

export default Inputform;