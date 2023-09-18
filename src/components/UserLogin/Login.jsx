import React, {useState} from 'react'

import { Link } from 'react-router-dom';
import './Login.css'

const Login = ({setIsLogin, setIsSignUp}) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
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

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('The Login Form Data', formData);
    }

    const signUp = () => {
        setIsLogin(false)
        setIsSignUp(true)
    }

  return (
    <div className='login-overlay'>
        <div>
            <button type='button' className='login-exit' onClick={() => setIsLogin(false)}>X</button>
            
            <h1>Login</h1>
            
            <form onSubmit={handleSubmit} className='login-form'>

                <section>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </section>

                <section>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </section>

                <Link to='forgot'><p>Forget password? Reset now.</p></Link>

                <div className='login-btns'>
                    <button type="button" onClick={signUp}>Register</button>
                    <button type="submit">Login</button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default Login