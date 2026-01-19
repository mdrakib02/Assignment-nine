import { Eye, EyeOff } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router'

export default function Signup() {
  const [showPassword, setShowPassword] = React.useState(!true);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  }
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up</h1>
          <p className="py-6">Welcome back! Please enter your credentials to access your account and continue your green journey with us.</p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type={showPassword? "text": "password"} className="input" placeholder="Password" />
             <div className='relative'><a className="link link-hover">Forgot password?</a>
                                <Link onClick={() => handleTogglePassword(showPassword)}> {showPassword ? <Eye size={18} className='absolute right-8 -top-9 cursor-pointer' /> : <EyeOff size={18} className='absolute right-8 -top-9 cursor-pointer' />}</Link>
                            </div>
              <button className="btn btn-neutral mt-4">Sign Up</button>
              <Link  to="/login">Do you have an account? Please <span className='text-blue-500'>Login</span></Link>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  )
}
