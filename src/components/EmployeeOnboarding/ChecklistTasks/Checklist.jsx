import React, { useState } from 'react'

import './Checklist.css'

const Checklist = () => {

    const [tasks, setTasks] = useState([
        { id: 1, task: 'Fill out employment paperwork', completed: false },
        { id: 2, task: 'Attend orientation session', completed: false },
        { id: 3, task: 'Complete training modules', completed: false },
        { id: 4, task: 'Set up workstation', completed: false },
      ]);

    const handleTaskCompletion = (taskId) => {
        setTasks((prevTasks) => {
            return prevTasks.map((task) => {
                return task.id === taskId ? { ...task, completed: !task.completed } : task 
            })
        })
    }

  return (
    <div className='checklist'>
        <div className='list-tasks'>
            <h2>Onboarding Checklist</h2>
            <ul>
                {tasks.map((task) => {

                    return (
                        <li 
                            key={task.id} 
                            onClick={() => handleTaskCompletion(task.id)} 
                            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                        >
                                {task.task}
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default Checklist