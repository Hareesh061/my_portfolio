import React from 'react'
import {Styles} from '../utils/Style'
import {projects} from '../Constants'
import Tilt from 'react-parallax-tilt'
import {SiGithub,SiNetlify} from 'react-icons/si'
function Project() {
  return (
    <div>
      <div className='flex-row items-center pl-5 justify-center pt-3' id='Projects'>
        <span className={Styles.sectionHeadText}>
          My Projects 
        </span>
        <hr className='w-[35%]'></hr>
        <div className={Styles.sectionText}>
        I excel in web development, creating user-friendly interfaces with HTML, CSS, and JavaScript. My front-end work focuses on responsive design and incorporates frameworks like React for optimal user experiences. On the back end, I build robust server-side logic using technologies like Node.js or Flask. Additionally, I've developed Python-based predictive models using machine learning libraries, seamlessly integrating them into web applications. My expertise extends to database design and optimization, ensuring efficient storage and retrieval of data through SQL queries. With a versatile skill set, I bring a comprehensive approach to projects that span front-end, back-end, prediction modeling, and database management.
        </div>
      </div>

      <div className='flex flex-wrap p-8 justify-evenly items-center'>
        {projects.map((project) => (
          <Tilt key={project.name} className='w-[300px] h-[500px] flex flex-col justify-evenly shadow-2xl m-10 item-center hover:shadow-2xl hover:shadow-blue-400 shadow-red-200 p-3 rounded-xl border-2 border-violet-500'>
            <div className='text-2xl text-black-600 font-extrabold mb-3 text-center'>
              {project.name}
            </div>

            <img src={project.image} alt={project.name} className='h-[200px] w-[250px] self-center border-2 border-pink-200 rounded-2xl'/>

            <div className='flex justify-center items-center mt-3'>
              <div className='h-[40px] w-40px m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500 flex justify-center items-center'>
                <a href={project.source_code_link} target='_blank' rel='noopener noreferrer'>
                  <SiGithub className="text-3xl font-bold text-violet-600"></SiGithub>
                </a>
              </div>

              <div className='h-[40px] w-40px m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500 flex justify-center items-center'>
                <a href={project.source_deploy_link} target='_blank' rel='noopener noreferrer'>
                  <SiNetlify className="text-3xl font-bold text-violet-600"></SiNetlify>
                </a>
              </div>
            </div>

            <div className='text-center'>
              <span className='text-orange-500'>
                {project.description}
              </span>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  )
}

export default Project;