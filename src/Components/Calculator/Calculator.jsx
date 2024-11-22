import React from 'react'

const Counter = () => {
  return (
    <div>
      <div className='flex'>
      <p>+</p>
      <p>-</p>
      <p>*</p>
      <p>%</p>
      </div>
      <div className='flex'>
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
      <div className='flex'>
        <button>4</button>
        <button>5</button>
        <button>6</button>
      </div>
      <div className='flex'>
        <button>7</button>
        <button>8</button>
        <button>9</button>
      </div>
      <div>0</div>
    </div>
  )
}

export default Counter