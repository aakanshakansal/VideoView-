import React from 'react'

export default function Signup() {
  return (
    <>
        <form action="" className='form'>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="" id="email"/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="" id="password" />
          </div>
          <div>
            <label htmlFor="password2">Confirm Password</label>
            <input type="password" name="" id="password2" />
          </div>
          <div>
            <a href='' id="Login_button">Sign Up</a>
          </div>
          <div>
          <a href=''>Don't have account? Click Here</a>
          </div>
        </form>
    </>
  )
}
