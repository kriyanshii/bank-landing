import React, { useState } from "react"
import { Link } from 'react-router-dom'


function Navbar() {
    const[click, setClick] = useState(false);

    const handleClick = () => setClick(!click)

    return (
        <nav className="navbar-div">
          <img className="logo-img" src="https://saltpe.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F170e6aa8-7078-47d6-87f1-e2d4af3db3a8%2Fgrey2280x280.png?table=block&id=920b1e41-8fc3-444a-b758-ef07a07d9561&spaceId=f4ad0ece-f6b4-4c21-8dd7-8c113278c8d8&width=250&userId=&cache=v2" alt="" />
            <div className= {click ? "dropdown-links-show" : "dropdown-links"}>

            <a href="#top-container">Home</a>
            <a href="#middle-container">About</a>
            <a href="#bottom-div">Blog</a>
            <a href="#last-container">Contact</a>
            <a href="https://saltpe.notion.site/saltpe/Intern-at-SALT-920b1e418fc3444ab758ef07a07d9561" target={'_blank'} rel="noreferrer">Careers</a>
          </div>
          <button type="button" className="button">Get Started</button>
          <div className="menu-icon" onClick={handleClick}>
              {/* <i className= ></i> */}
              <button className="btn" type="button">{click ? 'x' : 'lll'}</button>
          </div>
        </nav>
      )
}

export default Navbar