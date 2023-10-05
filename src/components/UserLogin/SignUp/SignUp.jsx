import React from 'react'

import { Link, Form, redirect } from 'react-router-dom';
import './SignUp.css'

export async function action ( {request} ) {
  const formData = await request.formData()

  const firstName = formData.get('firstName')
  const lastName = formData.get('lastName')
  const email = formData.get('email')
  const password = formData.get('password')
  const repeatPassword = formData.get('repeatPassword')

  console.log({ firstName, lastName, email, password, repeatPassword }); //user sign up data

  localStorage.setItem('isLoggedIn', true) //login the user
  const pathname = new URL(request.url).searchParams.get('redirectTo') || '/Applicant-Tracking'

  return redirect(pathname)
}

const SignUp = () => {

  return (
    <div className='signup-overlay'>
      <div>
        <h1>Register</h1>

        <Form method='post' replace className='signup-form'>

          <section>
            <label htmlFor="firstName">First Name</label>
            <input 
              id='firstName'
              type="text" 
              name='firstName'
              required
            />
          </section>

          <section>
            <label htmlFor="lastName">Last Name</label>
            <input 
              id='lastName'
              type="text" 
              name='lastName'
              required
            />
          </section>

          <section>
            <label htmlFor="email">Email</label>
            <input
              id='email' 
              type="email" 
              name='email'
              required
            />
          </section>

          <section>
            <label htmlFor="password">Password</label>
            <input
              id='password' 
              type="password" 
              name='password'
              required
            />
          </section>

          <section>
            <label htmlFor="repeatPassword">Confirm Password</label>
            <input 
              id='repeatPassword'
              type="password" 
              name='repeatPassword'
              required
            />
          </section>

          <div className='signup-btn-container'>
            <Link to='/login' >Login</Link>
            <button type='submit' className='signup-btn'>Register</button>
          </div>

        </Form>
      </div>
    </div>
  )
}

export default SignUp