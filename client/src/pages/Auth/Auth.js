import React from 'react'
import Logo from '../../img/logo.png'
import './Auth.css'

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Thomas Aurelius Media</h1>
          <h6>Explore ideas through the web</h6>
        </div>
      </div>
      <LogIn />
    </div>
  )
}

function LogIn() {
  return (
    <div className="a-right">
      <form className='infoForm authForm'>
        <h3>LogIn</h3>
        <div>
          <input type="text" placeholder='UserName' name='userName' className='infoInput' />
        </div>
        <div>
          <input type="password" placeholder='Password' name='password' className='infoInput' />
        </div>
        <div>
          <span style={{ fontSize: "12px"}}>Dont have an account? SignUp!</span>
        
          <button className='button infoButton'>LogIn</button>
        </div>
      </form>
    </div>
  )
}

function SignUp() {
  return (
    <div className="a-right">
      <form className='infoForm authForm'>
        <h3>SignUp</h3>
        <div>
          <input type="text" placeholder='FirstName' className='infoInput' name='firstName' />
          <input type="text" placeholder='LastName' className='infoInput' name='lastName' />
        </div>
        <div>
          <input type="text" placeholder='UserName' className='infoInput' name='userName' />
        </div>
        <div>
          <input type="password" placeholder='Password' className='infoInput' name='password' />
          <input type="password" placeholder='Confirm Password' className='infoInput' name='confirmpass' />
        </div>
        <div>
          <span style={{ fontSize: "12px"}}>Already have an account? Login!</span>
        </div>
        <button className='button infoButton' type='submit'>SignUp</button>
      </form>
    </div>

  )
}

export default Auth