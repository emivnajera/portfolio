import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href='www.linkedin.com/in/emiliano-velasquez-641398205' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/emivnajera' target='_blank'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials