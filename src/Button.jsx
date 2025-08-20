import React from 'react'

export default function Button({ type, className = '', ...props }) {
    const base = 'p-3 text-[1rem] font-medium inline-flex items-center justify-center leading-none rounded-full focus:outline-none'
    return (
        <button {...props} className={`${base} ${className}`}>
            {type}
        </button>
    )
}