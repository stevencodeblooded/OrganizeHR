import React, { useState } from 'react'

import './SearchFilter.css'

const SearchFilter = () => {

  const [ formData, setFormData ] = useState({
    anySearch: '',
    job: '',
    department: '',
    status: '',
    days: '',
  })

  console.log(formData);

  const handleChange = (e) => {
    const {name, value} = e.target

    setFormData((prevInput) => {
      return {
        ...prevInput,
        [name] : value
      }
    })
  }

  const handleFormSubmission = (e) => {
    e.preventDefault()

    //reset the form
    setFormData({
      anySearch: '',
      job: '',
      department: '',
      status: '',
      days: '',
    })

    console.log("Submitted Successfully!");
  }

  return (
    <div className='form-search-filter'>
      <form onSubmit={handleFormSubmission} className='form-filter'>

        <div className='form-elements'>
          <section>
            <input 
              type='text'
              name='anySearch'
              value={formData.anySearch}
              onChange={handleChange}
              placeholder='Search By name, id, etc'
            />

            <button type='submit'>Reset</button>
          </section>

          <section>
            <select name='job' value={formData.job} onChange={handleChange}>
              <option value="">--- Job Type ---</option>
              <option value="manager">Manager</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
            </select>
            
            <select name='department' value={formData.department} onChange={handleChange} >
              <option value="">--- Department ---</option>
              <option value="hr">HR</option>
              <option value="engineering">Engineering</option>
              <option value="marketing">Marketing</option>
            </select>
          </section>

          <section>
            <select name='status' value={formData.status} onChange={handleChange}>
              <option value="">--- Status ---</option>
              <option value="active">Active</option>
              <option value="onLeave">On Leave</option>
              <option value="inActive">In Active</option>
            </select>

            <select name='days' value={formData.days} onChange={handleChange}>
              <option value="">--- No. of Days ---</option>
              <option value="0-10">0-10 days</option>
              <option value="11-20">11-20 days</option>
              <option value="21-30">21-30 days</option>
            </select>
          </section>

        </div>

      </form>
    </div>
  )
}

export default SearchFilter