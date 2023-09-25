import React from 'react'

import LeaveManagement from '../components/leaveManagement/LeaveManagement'
import { authRequired } from '../components/utils/AuthRequired'

export async function loader ({ request }) {
  return await authRequired(request)
}

const LeaveManagementPage = () => {
  return (
    <div className='leave-managt'>
      <LeaveManagement />
    </div>
  )
}

export default LeaveManagementPage