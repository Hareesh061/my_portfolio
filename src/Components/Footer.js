import React from 'react';
import { GrGithub, GrMail, GrLinkedin } from 'react-icons/gr';
import { BiSolidPhoneCall } from 'react-icons/bi';

function Footer() {
  return (
    <div>
      <div className='w-screen bg-black flex flex-row justify-around flex-wrap'>
        <div className='flex p-3 flex-row flex-wrap justify-around'>
          <a
            href='https://www.linkedin.com/in/hareesh-naik'
            target='blank'
            className='text-lg flex flex-row text-violet-300 items-center'
          >
            <div className='h-8 w-8 rounded-full bg-blue-400 flex justify-center items-center'>
              <GrLinkedin className='text-white' />
            </div>
            <span className='text-white ml-1'>hareesh-naik</span>
          </a>
        </div>

        <div className='flex flex-row p-3 flex-wrap justify-around'>
          <a
            href='mailto:hareeshnaik836@gmail.com'
            target='blank'
            className='text-lg flex flex-row text-violet-300 items-center'
          >
            <div className='h-8 w-8  rounded-full bg-blue-400 flex justify-center items-center'>
              <GrMail className='text-white' />
            </div>
            <span className='text-white ml-1'>hareeshnaik836@gmail.com</span>
          </a>
        </div>

        <div className='flex flex-row p-3 flex-wrap justify-around'>
          <a
            href='/'
            target='blank'
            className='text-lg flex flex-row text-violet-300 items-center'
          >
            <div className='h-8 w-8  rounded-full bg-blue-400 flex justify-center items-center'>
              <BiSolidPhoneCall className='text-white' />
            </div>
            <span className='text-white ml-1'>6364258012</span>
          </a>
        </div>

        <div className='flex flex-row p-3 flex-wrap justify-around'>
          <a
            href='https://github.com/Hareesh061'
            target='blank'
            className='text-lg flex flex-row text-violet-300 items-center'
          >
            <div className='h-8 w-8  rounded-full bg-blue-400 flex justify-center items-center'>
              <GrGithub className='text-white' />
            </div>
            <span className='text-white ml-1'>Hareesh061</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
