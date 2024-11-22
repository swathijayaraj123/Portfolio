import React from 'react'

const Input = ({
    type='text',
    required='required',
    label='',
    placeholder='',
    pattern='',
    message='your message'

}) => {
  return (
    <div>
          <label htmlFor="">{label}</label>  
          <input type={text} placeholder={placeholder} />
    </div>
  
  )
}

export default Input