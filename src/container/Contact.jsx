import React from 'react'

import { Form, useActionData } from 'react-router-dom'
import imageContact from '../images/cool.jpg'

export async function action ({ request }) {

  const formData = await request.formData()

  const fname = formData.get('fname')
  const lname = formData.get('lname')
  const message = formData.get('message')

  return {fname, lname, message}
}

const Contact = () => {

  const data = useActionData()
  console.log(data);

  return (
    <div className='contact'>
      <h1>Contact Us</h1>

      <div className='contact-form'>
        <div>
          <p data-aos='zoom-in-up' data-aos-duration='1500'>We value your inquiries and feedback. Our team is here to assist you. Please feel free to reach out to us through the following contact information:</p>
          <img src={imageContact} alt="ImageContact"  data-aos='flip-right' data-aos-duration='1500' />
        </div>

        <Form method='post' className='contact-inputs' data-aos='flip-right' data-aos-duration='1500'>
          <h2>Send Us a Message</h2>
          <section>
            <input type="text" name="fname"  placeholder='first name' required/>
            <input type="text" name="lname" placeholder='last name' required/>
          </section>
          
          <textarea name="message" placeholder='enter message' required></textarea>
          <input type="submit" value="Send Message" className='contact-btn' />

        </Form>
      </div>

      <div className='container-hours-location'>
        <div className='hours-location'>
          <div data-aos='zoom-in-up' data-aos-duration='2000'>
            <h3>Business Hours</h3>
            <ul>
              <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
              <li>Saturday: Closed</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          <div data-aos='zoom-in-up' data-aos-duration='2000'>
            <h3>Location</h3>
            <ul>
              <li>Fortis Suites, 3rd Floor, 302</li>
              <li>Upperhill, Hospital Road.</li>
              <li>P.O Box 36837</li>
              <li>00200, Nairobi, Kenya</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact