import { Eye, EyeClosed, EyeOff } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router'

export default function Login() {

    const [showbtn, setShowbtn] = useState(!true);
    
    const handleShowPassword = () => {
        setShowbtn(!showbtn);
    }

    return (
        <div className="hero  min-h-screen">
            <div className="hero-content">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Welcome back! Please enter your credentials to access your account and continue your green journey with us.</p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type={showbtn? "text": "password"} className="input" placeholder="Password" />
                            <div className='relative'><a className="link link-hover">Forgot password?</a>
                                <Link onClick={() => handleShowPassword(showbtn)}> {showbtn ? <Eye size={18} className='absolute right-8 -top-9 cursor-pointer' /> : <EyeOff size={18} className='absolute right-8 -top-9 cursor-pointer' />}</Link>
                            </div>
                            <button className="btn btn-neutral mt-4">Login</button>
                            <Link to="/signup">If you haven't account please <span className='text-blue-500'>Signup</span></Link>
                        </fieldset>

                    </div>
                </div>
            </div>
        </div>
    )
}
