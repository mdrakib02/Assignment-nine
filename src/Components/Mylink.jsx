import React from 'react'
import { NavLink } from 'react-router'

export default function Mylink({ to, className, children }) {
    return (
        <NavLink to={to} className={({ isActive }) => isActive ? "" : `${className} `}>{children}</NavLink>
    )
}
