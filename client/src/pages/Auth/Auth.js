import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, signUp } from '../../actions/AuthAction'
import Logo from '../../img/compassicon.png'
import './Auth.css'

const Auth = () => {
  
  const [isSignUp, setIsSignUp] = useState(false)
  const dispatch = useDispatch()
  const loading = useSelector(state => state.authReducer.loading)
  const [formData, setFormData] = useState({
    
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [confirmPassword, setConfirmPassword] = useState(true)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(isSignUp){
      formData.password === formData.confirmPassword ? dispatch(signUp(formData)) : setConfirmPassword(false)
    } else {
      dispatch(logIn(formData))
    }
  }

  const resetForm = () => {
    setConfirmPassword(true)
    setFormData({
      
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
  }

  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Thomas Aurelius Media</h1>
          <h6>Explore ideas through the web</h6>
        </div>
      </div>
      
      <div className="a-right">
        <form className='infoForm authForm' onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>
          {isSignUp && (
            <>
            <div>
              <input type="text" placeholder='FirstName' className='infoInput' name='firstName' value={formData.firstName} onChange={handleChange} />
              <input type="text" placeholder='LastName' className='infoInput' name='lastName' value={formData.lastName} onChange={handleChange}/>
            </div>
          
          </>
          )}
          
          <div>
            <input type="text" placeholder='Email' className='infoInput' name='email' value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <input type="test" placeholder='Password' className='infoInput' name='password' value={formData.password} onChange={handleChange}/>
            {isSignUp && (
            <input type="text" placeholder='Confirm Password' className='infoInput' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange}/>
            )}
          </div>

          <span style={{display: confirmPassword ? 'none' : 'block', color: "red", fontSize: "16px", alignSelf: "center" }}>
              Passwords do not match
          </span>

          <div>
            <span style={{ fontSize: "12px", cursor: "pointer"}} onClick={() => {
              setIsSignUp(prev => !prev); resetForm()
            }}>{isSignUp ? "Already have an account? Login!" : "Don't have an account? Sign Up!"}</span>
          </div>
          <button className='button infoButton' type='submit' disabled={loading}>{loading ? "Loading" : isSignUp ? "Sign Up" : "Log In"}</button>
        </form>
      </div>

    </div>
  )
}



function SignUp() {
  
}

export default Auth