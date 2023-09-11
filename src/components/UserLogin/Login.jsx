import React, {useState} from 'react'

import './Login.css'
import { Link } from 'react-router-dom';

const Login = ({setIsLogin}) => {

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

    }

  return (
    <div className='login-overlay'>
        <div>
            <button type='button' className='login-exit' onClick={() => setIsLogin(false)}>X</button>
            
            <h1>Login</h1>
            
            <form onClick={handleSubmit} className='login-form'>

                <section>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
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

                <Link to=''><p>Forget password? Reset now.</p></Link>

                <div className='login-btns'>
                    <button type="submit">Register</button>
                    <button type="submit">Login</button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default Login