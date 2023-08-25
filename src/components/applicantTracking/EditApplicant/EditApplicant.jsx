import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";

import './EditApplicant.css'

const EditApplicant = ( { editedApplicant, handleChange, handleCancelEdit, handleSaveEdit } ) => {

  return (
    <div>

        <div className="edit-bg"> 

          <div className="edit-form">
            <input
              type="text"
              name="name"
              value={editedApplicant.name}
              onChange={handleChange}
            />

            <input
              type="text"
              name="status"
              value={editedApplicant.status}
              onChange={handleChange}
            />

            <input 
              type="text"
              name="jobPosition"
              value={editedApplicant.jobPosition}
              onChange={handleChange}
            />

            <input 
              type="email"
              name="email"
              value={editedApplicant.email}
              onChange={handleChange}
            />

            <input 
              type="tel"
              name="phone"
              value={editedApplicant.phone}
              onChange={handleChange}
            />

            <input 
              type="text"
              name="address"
              value={editedApplicant.address}
              onChange={handleChange}
            />

            <textarea 
              placeholder='Add notes or comments'
              type='text'
              name='comments'
              value={editedApplicant.comments}
              onChange={handleChange}
            ></textarea>

           <div className="documents">
              <a href="https://google.com" > <FontAwesomeIcon icon={faFile} className="icons" />Resume</a>
              <a href='https://google.com'> <FontAwesomeIcon  icon={faFile} className="icons"/>Cover Letter</a>
           </div>

            <div className="edit-btns">
              <button onClick={handleSaveEdit} className="saveBtn">
                Save
              </button>
              <button onClick={handleCancelEdit} className="cancelBtn">
                Cancel
              </button>
            </div>
          </div>

        </div>

    </div>
  )
}

export default EditApplicant