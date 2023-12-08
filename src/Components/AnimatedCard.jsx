import React from 'react'
import './AnimatedCard.css'

const AnimatedCard = () => {
  return (
    <div className='animatedcard'>
        <div className="box">
      <form action="">
        <h2>Sign in</h2>
        <div className="input-box">
            <input type="text" required />
            <span>Username</span>
            <i></i>
        </div>
        <div className="input-box">
            <input type="password" required />
            <span>Password</span>
            <i></i>
        </div>
        <div className="links">
            <a href="">Forgot Password</a>
            <a href="">Register Here</a>
        </div>
        <input type="submit" vlaue='Login'/>
      </form>
    </div>
    </div>
  )
}

export default AnimatedCard; 
