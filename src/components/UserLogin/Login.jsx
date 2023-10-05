import React from 'react'

import { Link, useSearchParams, Form, redirect } from 'react-router-dom';
import './Login.css'

//The action Data Layer API to handle formData
export async function action ( { request } ) {
    const formData = await request.formData()

    const email = formData.get('email')
    const password = formData.get('password')
    console.log({ email, password }); //user data  

    localStorage.setItem('isLoggedIn', true) //login the user

    const pathname = new URL(request.url).searchParams.get('redirectTo') || '/Applicant-Tracking'
    return redirect(pathname)
}

const Login = () => {

    const [searchParams] = useSearchParams()
    const message = searchParams.get('message') 

  return (
    <div className='login-overlay'>
        <div>
            <h1>Login</h1>

            { message && <pre className='login-message'>{message}</pre> }
            
            {/* the replace prop  => not required to login after clicking back button on browser */}
            <Form method='post' replace className='login-form'>

                <section>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        required
                    />
                </section>

                <section>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password"
                        required
                    />
                </section>

                <Link to='forgot'><p>Forget password? Reset now.</p></Link>

                <div className='login-links'>
                    <Link to='/SignUp' >Register</Link>
                    <button type="submit">Login</button>
                </div>

            </Form>
        </div>
    </div>
  )
}

export default Login