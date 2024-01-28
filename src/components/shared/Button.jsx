import React from 'react';

const Button = ({children}) => {
  return (
      <button className='bg-primary inline px-10 py-2 rounded-xl shadow-md font-semibold'>{children}</button>
  )
}

export default Button