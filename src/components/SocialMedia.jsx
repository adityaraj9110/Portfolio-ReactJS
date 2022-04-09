import React from 'react'
import {BsTwitter, BsInstagram , BsLinkedin , BsGithub} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
          <a href="https://www.linkedin.com/in/aditya-raj-9b2165227/" target={'_blank'}><BsLinkedin /> </a>
      </div>
      <div>
          <a href="https://www.facebook.com/profile.php?id=100007581254284" target={'_blank'}><FaFacebookF/> </a>
      </div>
      <div>
          <a href="https://www.instagram.com/theadityasrivastav_/" target={'_blank'}><BsInstagram/></a>
      </div>
      <div>
          <a href="https://github.com/adityaraj9110" target={'_blank'}><BsGithub/></a>
      </div>
    </div>
  )
}

export default SocialMedia
