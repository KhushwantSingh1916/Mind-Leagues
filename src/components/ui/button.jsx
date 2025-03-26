import React from "react"

const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={`inline-flex items-center justify-center ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button }