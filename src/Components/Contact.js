import React, {useRef} from 'react'
import { Styles } from '../utils/Style'
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_bkilbna', 'template_vd5p7jr', form.current,
     'pI-uUDBnS3vnOOnFu'
          )
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...');
            },
          );
          e.target.reset()
      };

  return (
    <div>
        <div className='flex-row items-center pl-3 justify-center pt-3' id='Contact'>
            <span className={Styles.sectionHeadText}>
              Contact
            </span>
            <hr className='w-[35%]'></hr>
        
        </div>
        <div className='mt-6'>
            <div className='flex flex-wrap flex-row justify-around'>
                <div className='lg:w-[40%]'>

                    <form ref={form} onSubmit={sendEmail} className='m-5 flex flex-col pag-3'>
                       
                        <label className='flex flex-col gap-3'>
                            <span className='text-violet-700 font-medium mb-2'>
                                Your Name
                            </span>
                            <input
                            type='text'
                            name='user_name'
                            placeholder='Whats your good name?'
                            className='bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium' required>
                            
                            </input>
                        </label>

                        <label className='flex flex-col gap-3'>
                            <span className='text-violet-700 font-medium mb-2'>
                               Your Email
                            </span>
                            <input
                            type='email'
                            name='user_email'
                            placeholder='Enter your Email'
                            className='bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium' required >
                            
                            </input>
                        </label>

                        <label className='flex flex-col gap-3'>
                            <span className='text-violet-700 font-medium mb-2'>
                                Type Message
                            </span>
                            <textarea
                            row={5}
                            name='message'
                            placeholder='Whats your message'
                            className='bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium'required >
                            
                            </textarea>
                        </label>

                    <button type='submit'
                    className='bg-slate-100 hover:shadow-orange-300 py-3 px-8 mb-4 m-4 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-primary'>
                        Submit


                    </button>

                    </form>

                </div>
                <div className='lg:w-[40%] mt-6'>
                    <img src="https://www.sticsoftsolutions.com/images/contact-us.png" alt="rand img"/>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Contact
