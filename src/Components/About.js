import React from 'react'
import profile from '../assets/myimg.jpg';
import {Styles} from '../utils/Style.js';
import Resume from '../assets/Hareesh_Resume.pdf';
import {TiArrowDownOutline} from "react-icons/ti";
import '../App.css'


function About() {
  return (
    <div className='flex flex-wrap justify-center items-center mt-10 p-10' id='Home'>
      <div className='flex-1 py-4'>
        <span className={Styles.heroHeadText}>
          Hi,I'm <span className='text-orange-600 '>
Hareesh Naik
          </span>
          <br/>
          <span className={Styles.heroSubText}>
            I am a Front End Developer

          </span>
        </span>

        <br/>
        <div className='w-[14rem'>
            <a  href={Resume} download="Resume" target='blank' rel='noreferrer'>
              <div className='p-4 mt-2 w-[14rem] rounded-xl text-orange-500 flex justify-center border-2 border-orange-500 hover:border-violet-500  shadow-lg hover:shadow-pink-500' ><TiArrowDownOutline className='text-lg mr-3 mt-1 text-orange-500 '>

              </TiArrowDownOutline>
                 Resume
              </div>
            </a>
        </div>

      </div>

      <div className='flex flex-wrap '>
        <img className='img'  src={profile} alt='profile'/>
      </div>
    </div>
  )
}

export default About
