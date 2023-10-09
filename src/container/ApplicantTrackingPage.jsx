import React from 'react'

import { useLoaderData } from 'react-router-dom'
import ApplicantTracking from '../components/applicantTracking/ApplicantTracking/ApplicantTracking'
import { getApplicants } from '../components/utils/api'
import { authRequired } from '../components/utils/AuthRequired'


export async function loader ({ request }) {
  await authRequired(request)
  const applicants = getApplicants()
  return applicants
}

const ApplicantTrackingPage = () => {

  const applicantsList = useLoaderData()

  return (
    <div>
        <ApplicantTracking applicants={applicantsList} />
    </div>
  )
}

export default ApplicantTrackingPage