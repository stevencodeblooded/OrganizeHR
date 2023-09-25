import React from 'react'

import ApplicantTracking from '../components/applicantTracking/ApplicantTracking/ApplicantTracking'
import { authRequired } from '../components/utils/AuthRequired'

export async function loader ({ request }) {
  return await authRequired(request)
}

const ApplicantTrackingPage = () => {

  return (
    <div>
        <ApplicantTracking />
    </div>
  )
}

export default ApplicantTrackingPage