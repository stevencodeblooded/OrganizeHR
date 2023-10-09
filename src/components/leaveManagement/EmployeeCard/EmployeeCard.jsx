import React from 'react'

import Card from './Card/Card'
import './EmployeeCard.css'

const EmployeeCard = ({ allEmployees }) => {

  const employeeData = allEmployees.map((employee) => {
    return (
      <Card 
        key={employee.id}
        employee={employee}
      />
    )
  })

  return (
    <div className='employee-card'>
      {employeeData}
    </div>
  )
}

export default EmployeeCard