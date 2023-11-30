import { faAlignCenter } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Profile from '../assets/profile_pic.jpeg'

const Aboutme = () => {
  return (
      <div className='aboutme_info' id="Aboutme">
          <div class="container"> <br></br> <br></br>
                <div class="row">
                  <div class="col-2"> </div>
                  <div class="col-4">
                      <img className='profile_pic' src={Profile} alt='profile picture...'></img>
                  </div>
                  <div class="col-6">
                      <h3>About me</h3>
                      <p className='about_details'>I am a seasoned full-stack developer with expertise in 
                            crafting and overseeing REST APIs, proficient in an array of programming 
                            languages and frameworks. My PHP development skills extend to utilizing Laravel and 
                            Codeigniter, and I am highly adept in JavaScript for front-end development, leveraging 
                            the React framework to create dynamic websites and seamlessly consume APIs.
                            My proficiency extends to database management, where I excel in both MySQL and 
                            PostgreSQL. I bring a wealth of experience working with Python, having utilized 
                            frameworks such as Flask and Django. Additionally, I possess the capability to develop 
                            mobile applications using Flutter.Driven by a profound passion for creating efficient 
                            web and mobile applications, I continually embrace new challenges to enhance my software 
                            development skills. I am dedicated to transforming clients' ideas into vibrant, 
                            functional, and innovative digital solutions.
                        </p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Aboutme
