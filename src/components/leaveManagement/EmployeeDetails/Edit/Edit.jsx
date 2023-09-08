import React, {useState} from 'react'

import './Edit.css'

const Edit = ({editedData, handleChange, exitApplicant, setIsEditEmployee}) => {

    const handleSave = () =>{
        console.log('New Contact Information Saved as: ', editedData);
        setIsEditEmployee(false)
    }

    const handleCancel = () => {
        setIsEditEmployee(false)
        console.log('Cancelled');
    }
    
  return (
    <div className='edit-leave-employee'>
        <div className='form-edit-leave'>
            <button onClick={exitApplicant}>X</button>

            <h1>Edit Applicant</h1>
            <div>
                <input 
                    type='text'
                    value={editedData.name}
                    name='name'
                    onChange={handleChange}
                />

                <input 
                    type="email" 
                    name="email"
                    value={editedData.email}
                    onChange={handleChange} 
                />

                <input 
                    type="text" 
                    name="phone"
                    value={editedData.phone}
                    onChange={handleChange}
                />

                <input 
                    type="text" 
                    name="address"
                    value={editedData.address}
                    onChange={handleChange}
                />

                <div>
                    <button onClick={handleSave} type="button">Save</button>
                    <button onClick={handleCancel} type="button">Cancel</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Edit