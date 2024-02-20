import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Styles } from '../utils/Style';
import { technologies, services } from '../Constants';
import './style.css';



function OverView() {
  return (
    <div>
      <div className='flex-row items-center pl-5 justify-center pt-3 ' id='About'>
        <span className={Styles.sectionHeadText}>About Me..</span>
        <hr className='w-[35%]'></hr>

        <div className={Styles.sectionText}>
          <div className='flex flex-wrap '>
            <div className='text-description '>
              I'm a <strong>Computer Science Graduate</strong> with a strong foundation in Data Structures, Algorithms, and Programming Languages (C++), along with a proven ability to adapt quickly, collaborate effectively, and maintain a strong commitment to quality and innovation. Their practical experience and dedication make them a valuable asset to any team.
            </div>
          
        </div>
      
        </div>
        </div>
     
        
      <br />
  <h1 className='flex flex-wrap justify-center text-2xl text-blue-500'><b>My Education</b></h1>
  <br/>
     <div className='flex flex-col justify-center items-center p-3 '>
      <div className='p-4 mt-2 rounded-xl text-black-500 flex justify-center border-2 border-orange-500 hover:border-violet-500  shadow-lg hover:shadow-blue-500'>
      <p><b><i>1. Course: BE, CSE</i><br/><i> College:JSS ACADEMY OF TECHNICAL EDUCATION BANGALORE-2023</i></b><br/><i>Marks: 7.9/10</i></p>
      
      </div>
<br/>

      <div className='p-4 mt-2  rounded-xl text-black-500 flex justify-center border-2 border-orange-500 hover:border-violet-500  shadow-lg hover:shadow-blue-500'>
      <p><b><i>2. Course: 12th, PCMB</i><br/><i>College: SIDDARTHA PRE-UNIVERSITY COLLEGE-2019</i></b><br/><i>Marks: 73/100</i></p>
    
      </div>
      <br/>

      <div className=' p-4 mt-2 rounded-xl text-black-500 flex justify-center border-2 border-orange-500 hover:border-violet-500  shadow-lg hover:shadow-blue-500'>
      <p><b><i>3. Course: SSLC </i><br/><i>College: GOVT HIGH SCHOOL GORTE-2017</i></b><br/><i>Marks: 90.24/100</i></p>
     
      </div>
     </div>

     <br/><br/>

     <h1 className='flex flex-wrap justify-center text-2xl text-blue-500'><b>My Experience</b></h1>

     
<section class="timeline-section">
	<div class="timeline-items">
		<div class="timeline-item">
			<div class="timeline-dot"></div>
			<div class="timeline-date">2022</div>
			<div class="timeline-content">
				<h3>Intern @SmartInternz</h3>
				<p>I have done two month virtual internship in Androind Development </p><br/>
       <p > <a href="https://drive.google.com/file/d/1GALplStJkOGwE0Hb2VgNmt74yYwbcOfq/view?usp=drive_link">See Certificate</a></p>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-dot"></div>
			<div class="timeline-date">2022</div>
			<div class="timeline-content">
				<h3>Intern @Oasis Infobyte</h3>
				<p>I completed one month online internship in web design and development</p>
        <br/> <p > <a href="https://drive.google.com/file/d/1TURBZCSVbsF-UGQUb9CO2SGfz8iuNICq/view?usp=sharing">See Certificate</a></p>
			</div>
		</div>

    <div class="timeline-item">
			<div class="timeline-dot"></div>
			<div class="timeline-date">2022</div>
			<div class="timeline-content">
				<h3>Participated CodeKaze Challenge</h3>
        <br/> <p > <a href="https://drive.google.com/file/d/15jE2-kSUMRiIYXarYaZmcBiq_g15pH5c/view?usp=sharing">See Certificate</a></p>
			</div>
		</div>
    
		<div class="timeline-item">
			<div class="timeline-dot"></div>
			<div class="timeline-date">2022</div>
			<div class="timeline-content">
				<h3>Online Course Work(IIRS)</h3>
        <p>I completed “Overview of Geoprocessing using Python” course from IIRS</p>
        <br/> <p > <a href="https://drive.google.com/file/d/1KIZlrqZFNoUAnntM7wyVjTTVNM3ZvdEe/view?usp=sharing">See Certificate</a></p>
			</div>
		</div>
	
  
	</div>
</section>

      <h1 className='flex flex-wrap justify-center text-2xl text-blue-500'><b>My Services</b></h1>

      <div className='flex flex-wrap justify-center'>
        {services.map((service) => (
          <div key={service.icon}>
            <Tilt
              className="parallax-effect-glare-scale"
              perspective={500}
              glareColor="#000000"
              glareEnable={true}
              glareMaxOpacity={0.50}
              scale={1.02}
              gyroscope={true}
            >
              <div className='p-3 m-3 flex flex-col justify-evenly items-center'>
                <img className='h-[100px] w-[100px]' src={service.icon} alt={service.title} />
                <div className='m-5 text-violet-500'>{service.title}</div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>

      <div className='flex flex-wrap justify-center items-center'>
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className='m-4 mt-5 h-[100px] w-[100px] rounded-3xl shadow-2xl border-[2px] border-violet-400 hover:shadow-blue-400'
          >
            <img className='p-2' src={technology.icon} alt={technology.name} />
            <div className='text-violet-600 justify-center flex'>{technology.name}</div>
          </div>
        ))}
      </div><br/>
    </div>
  );
}

export default OverView;
