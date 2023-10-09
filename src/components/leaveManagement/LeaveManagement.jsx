import React from 'react'

import Header from './Header/Header'
import SearchFilter from './SearchFilter/SearchFilter'
import EmployeeCard from './EmployeeCard/EmployeeCard'
import Pagination from './Pagination/Pagination'

const LeaveManagement = ({employees}) => {

  return (
    <div>
        <Header />
        <SearchFilter />
        <EmployeeCard allEmployees={employees} />
        <Pagination />
    </div>
  )
}

export default LeaveManagement