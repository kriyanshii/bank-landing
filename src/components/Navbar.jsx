// import logo from '.public\logo.png'; 
// import { ReactComponent as Logo } from './Logo';

function Navbar() {
  return (
    <div className="navbar-div">
      <img className="logo-img" src="" alt="" />
    <div className="dropdown">
      {/* <img className="hamburger-icon" onclick="dropdown(this , 'show')" src="public\icon-hamburger.svg" alt="" /> */}
      {/* <img className="close-icon" onclick="dropdown(this , 'close')" src="public\icon-close.svg" alt="" /> */}
      <div className="dropdown-links">
        <a href="#top-container">Home</a>
        <a href="#middle-container">About</a>
        <a href="#bottom-div">Blog</a>
        <a href="#last-container">Contact</a>
        <a href="https://saltpe.notion.site/saltpe/Intern-at-SALT-920b1e418fc3444ab758ef07a07d9561" target={'_blank'} rel="noreferrer">Careers</a>
      </div>
    </div>
    <button type="button" name="button">Get Started</button>
    </div>
  )
}

export default Navbar
