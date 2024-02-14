import React from 'react'
import Profile from '../assets/profile.png';
import {Styles} from '../utils/Style.js';
import Resume from '../assets/Hareesh_Resume.pdf';


function About() {
  return (
    <div className='flex flex-wrap justify-center items-center mt-10 p-10' id='Home'>
      <div className='flex-1 py-4'>
        <span className={Styles.heroHeadText}>
          Hi,I'm <span className='text-orange-600'>
Hareesh Naik
          </span>
          <br/>
          <span className={Styles.heroSubText}>
            I am a Front End Developer

          </span>
        </span>
      </div>
    </div>
  )
}

export default About
