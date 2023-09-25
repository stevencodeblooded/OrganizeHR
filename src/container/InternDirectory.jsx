import React from 'react'

import { authRequired } from '../components/utils/AuthRequired'

export async function loader ({ request }) {
  return await authRequired(request)
}

const InternDirectory = () => {
  return (
    <div className='intern-directory'>
        <h1>InternDirectory</h1>
    </div>
  )
}

export default InternDirectory