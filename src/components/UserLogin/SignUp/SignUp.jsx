import React, {useState} from 'react'

import './SignUp.css'

const SignUp = ({setIsSignUp}) => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <div className='signup-overlay'>
      <div>
        <button type='button' className='signup-exit' onClick={() => setIsSignUp(false)}>X</button>
        <h1>Register</h1>

        <form className='signup-form'>

          <section>
            <label htmlFor="firstName">First Name</label>
            <input 
              id='firstName'
              type="text" 
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </section>

          <section>
            <label htmlFor="lastName">Last Name</label>
            <input 
              id='lastName'
              type="text" 
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </section>

          <section>
            <label htmlFor="email">Email</label>
            <input
              id='email' 
              type="email" 
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </section>

          <section>
            <label htmlFor="password">Password</label>
            <input
              id='password' 
              type="password" 
              name='password'
              value={formData.password} 
              onChange={handleChange}
              required
            />
          </section>

          <section>
            <label htmlFor="repeatPassword">Confirm Password</label>
            <input 
              id='repeatPassword'
              type="password" 
              name='repeatPassword'
              value={formData.repeatPassword} 
              onChange={handleChange}
              required
            />
          </section>

          <div className='signup-btn-container'>
            <button type='submit' className='signup-btn' onClick={handleSubmit}>Register</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default SignUp