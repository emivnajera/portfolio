import React from 'react'
import {BiCheck} from 'react-icons/bi'
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>Frontend Developer</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list icon'/>
              <p>Contenido</p>
            </li>

            <li>
              <BiCheck className='service_list icon'/>
              <p>Contenido</p>
            </li>

            <li>
              <BiCheck className='service_list icon'/>
              <p>Contenido</p>
            </li>

            <li>
              <BiCheck className='service_list icon'/>
              <p>Contenido</p>
            </li>

            <li>
              <BiCheck className='service_list icon'/>
              <p>Contenido</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Backend Developer</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list icon'/>
              <p>Contenido</p>
            </li>

            <li>
              <BiCheck className='service_list icon'/>
              <p>Contenido</p>
            </li>

            <li>
              <BiCheck className='service_list icon'/>
              <p>Contenido</p>
            </li>

            <li>
              <BiCheck className='service_list icon'/>
              <p>Contenido</p>
            </li>

            <li>
              <BiCheck className='service_list icon'/>
              <p>Contenido</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Database Administrator</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list icon'/>
              <p>Contenido</p>
            </li>

            <li>
              <BiCheck className='service_list icon'/>
              <p>Contenido</p>
            </li>

            <li>
              <BiCheck className='service_list icon'/>
              <p>Contenido</p>
            </li>

            <li>
              <BiCheck className='service_list icon'/>
              <p>Contenido</p>
            </li>

            <li>
              <BiCheck className='service_list icon'/>
              <p>Contenido</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services