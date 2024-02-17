import React from 'react'
import {Styles} from '../utils/Style'

function Project() {
  return (
    <div>
        <div className='flex-row items-center pl-5 justify-center pt-3 ' id='Overview'>
       <span className={Styles.sectionHeadText}>
        My Projects 
       </span>
       <hr className='w-[35%]'></hr>
       <div className={Styles.sectionText}>
       Exploring the intersection of artificial intelligence and sustainable development, this project aims to develop innovative solutions for optimizing resource utilization and reducing environmental impact. Leveraging advanced machine learning algorithms, the research focuses on creating intelligent systems that can enhance decision-making processes in areas such as energy efficiency, waste management, and conservation. The ultimate goal is to contribute to a more sustainable and technologically empowered future.
       </div>
       </div>
    </div>
  )
}

export default Project
