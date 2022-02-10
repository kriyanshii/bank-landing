import React from 'react'

function Contact() {
  return (
    <div className="bottom-div" id ="bottom-div">
      <div className="about-info">
      <img className="logo-img" src="https://saltpe.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F170e6aa8-7078-47d6-87f1-e2d4af3db3a8%2Fgrey2280x280.png?table=block&id=920b1e41-8fc3-444a-b758-ef07a07d9561&spaceId=f4ad0ece-f6b4-4c21-8dd7-8c113278c8d8&width=250&userId=&cache=v2" alt="" />

        <span>
        </span>
      </div>
      <div className="about-info">
        <a href="#"> About Us</a>
        <a href="#">Contact</a>
        <a href="#"> Blog</a>
      </div>
      <div className="about-info">
        <a href="#"> Careers</a>
        <a href="#">Support</a>
        <a href="#"> Privacy Policy</a>
      </div>

      <div className="about-info">
        <button type="button" name="button">Get Started</button>

        <a href='http://kriyanshishah.github.io/' target={'_blank'}>© Kriyanshi Shah.</a> All Rights Reserved
      </div>
    </div>
  )
}

export default Contact
