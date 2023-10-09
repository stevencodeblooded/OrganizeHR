import React from 'react'

import LeaveManagement from '../components/leaveManagement/LeaveManagement'
import { authRequired } from '../components/utils/AuthRequired'
import { getEmployees } from '../components/utils/api'
import { useLoaderData } from 'react-router-dom'

export async function loader ({ request }) {
  await authRequired(request)
  const allEmployees = await getEmployees()
  return allEmployees
}

const LeaveManagementPage = () => {

  const employees = useLoaderData()

  return (
    <div className='leave-managt'>
      <LeaveManagement employees={employees} />
    </div>
  )
}

export default LeaveManagementPage