import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpg'
import { FaGraduationCap } from 'react-icons/fa'
import {BsFillLightbulbFill} from 'react-icons/bs'
import {BsCodeSlash} from 'react-icons/bs'

const About = () => {
  return (
    <section id ='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className="about_me-image">
            <img src={ME} alt='About Image'></img>
          </div>

          <div className="about_content">
            <div className="about_cards">
              <article className='about_card'>
                <FaGraduationCap className='about_icon'/>
                <h5>Engineering Student</h5>
                <small>Last Year of College</small>
              </article>

              <article className='about_card'>
                <BsFillLightbulbFill className='about_icon'/>
                <h5>Smart</h5>
                <small>Problem Solving Skills</small>
              </article>

              <article className='about_card'>
                <BsCodeSlash className='about_icon'/>
                <h5>Programming Skills</h5>
                <small>Knowledge in Several Languages</small>
              </article>

              <p>Resumen Personal Aqui</p>

              <a href='#contact' className='btn btn-primary'>Let's Talk</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About