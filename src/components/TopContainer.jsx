import React from 'react'
// import Login from './components/login'

function TopContainer() {
  return (
    <div>
      <div className="top-container">
        <div className="main-heading">
            <h1 className='typing-demo'><b>Not your average</b></h1>
            <h1 className='typing-demo'><b>banking experience.</b></h1>


            <p> Banking, but seasoned with SALT. <br></br>
We deal with all things related to global<br></br>
business banking so that you don't have to.</p>
            <button type="button" name="button">Request Invite</button>
        </div>
        <div className="mobile-login-div">
            <form>
                <h1 className="login">Login</h1><br/>
                <div className="details">
                <label for="username">Enter your name:<br/>
                <input type="text" name="username" className="username" ></input>
                </label><br/><br/>
                </div>
                <label for="password ">Password:<br/>
                <input type="text" class="username" name="password" required ></input></label>
                <button type="submit" name="submit" class="submit" value="Submit">Submit</button>
                <br/><br/>
            </form>
        </div>
        </div>
    </div>
  )
}

export default TopContainer
