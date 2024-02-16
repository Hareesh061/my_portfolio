import React from 'react'
import Tilt from 'react-parallax-tilt'
import {Styles} from '../utils/Style'
import { technologies,services } from '../Constants'
import {motion} from "framer-motion"
import './style.css'

function OverView() {
  return (
    <div>
      <div className='flex-row items-center pl-5 justify-center pt-3 ' id='Overview'>
       <span className={Styles.sectionHeadText}>
        Introduction 
       </span>
       <hr className='w-[35%]'></hr>
       <div className={Styles.sectionText}>
       The individual in question is a fresh Computer Science graduate who brings forth a robust foundational understanding encompassing vital aspects such as data structures, algorithms, and programming languages. Demonstrating adaptability through a diverse array of projects and coursework, they exhibit a propensity for swift learning. Their adeptness in languages such as Java, Python, and C++ equips them to make meaningful contributions to coding endeavors. Proficiency in collaborative settings is evidenced by their participation in group projects, underscoring their appreciation for lucid communication.
       </div>
      </div>

       <div className='flex flex-wrap justify-center'>
          {
            services.map((service) => (
              <div>
                <Tilt
                  key={service.icon}
         className="parallax-effect-glare-scale"
         perspective={500}
         glareColor="#000000"
         glareEnable={true}
         glareMaxOpacity={0.50}
         scale={1.02}
         gyroscope={true}>
          <div className='p-3 m-3 flex flex-col justify-evenly items-center'>
            <img className='h-[100px] w-[100px]' src={service.icon} alt={service.title}/>
            <div className='m-5 text-violet-500'>
              {service.title}
            </div>
          </div>

                </Tilt>
                </div>
            ))
          }
       </div>
      
      <div className='flex flex-wrap justify-center items-center'>
          {technologies.map((technology) =>(
           <div 
           key={technology.name}
           
           >


            </div>

          ))

          }
      </div>



    </div>
  )
}

export default OverView
