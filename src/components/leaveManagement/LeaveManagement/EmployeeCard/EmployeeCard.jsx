import React from 'react'

import allEmployees from '../../../../mockData/employeesList'

import './EmployeeCard.css'
import Card from './Card/Card'

const EmployeeCard = () => {

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