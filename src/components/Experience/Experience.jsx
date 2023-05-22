import React from 'react'
import "./Experience.css"
import {BsFillPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills i Have</h5>
      <h2>My Experience</h2>
      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icon' />
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icon' />
            <div>
            <h4>Css</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icon' />
            <div>
            <h4>Javascript</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icon' />
            <div>
            <h4>Boostrap</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icon' />
            <div>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icon' />
            <div>
            <h4>Tailwind Css</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icon' />
            <div>
            <h4>Redux</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icon' />
            <div>
            <h4>Git & Github</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>

        </div>

        
      </div>
      
    </section>
  )
}

export default Experience