import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import './ContactMe.css'

const ContactMe = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "37f3fcb7-73be-4e7c-b0ee-03155205526a"); 

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("✅ Your message has been sent successfully!");
      event.target.reset(); // clear form
    } else {
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section>
      <div id='contact' className="wrapper p-block-9 boder-btm">
        <div className='text-center'>
          <span className='sub-text overlay-text middle' datatype='Contact Me'>Contact Me</span>
          <h2>
            <span className="green-text">Contact Me</span> 
          </h2>
        </div>

        <div className='flex gap-5 mt-5'>
          {/* ✅ Added onSubmit */}
          <form onSubmit={onSubmit}>
            <div className='flex gap-2'>
              <div className='input-container'>
                <label htmlFor="name">Your Name*</label>
                <input type="text" name="name" id="name" required autoComplete="off" placeholder="Ex. Amit Yadav" className='input-field' />
              </div>
              <div className='input-container'>
                <label htmlFor="Email">Email*</label>
                <input type="email" name="Email" id="Email" required autoComplete="off" placeholder="example@gmail.com" className='input-field' />
              </div>
            </div>

            <div className='flex gap-2 mt-2'>
              <div className='input-container'>
                <label htmlFor="phone">Phone*</label>
                <input type="tel" name="phone" id="phone" required autoComplete="off" placeholder="Enter Phone Number" className='input-field' />
              </div>
              <div className='input-container'>
                <label htmlFor="country">Country*</label>
                <input type="text" name="country" id="country" required autoComplete="off" placeholder="Enter Your Country" className='input-field' />
              </div>
            </div>

            <div className='mt-2'>
              <label htmlFor="message">Your Message*</label><br/>
              <textarea name="message" id="message" placeholder='Enter here.....' required className='input-field' rows={9}></textarea>
            </div>

         
            <div className='mt-2'>
              <button type="submit" className='btn'>Send Message</button>
            </div>
          </form>

          <div className='info card'>
            <div className='details gap-4'>
              <h6>Contact</h6>
              <p>aryanlte22@gmail.com</p>
            </div>
            <div className='bg-header rounded-b'>
              <h5>Stay Connected</h5>
              <div className='flex gap-1 mt-1'>
              
                <a 
                  href="https://x.com/GamingZythum" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='icon-container black-inverse'
                >
                  <FaSquareXTwitter />
                </a>
                <a 
                  href="https://www.linkedin.com/in/vayu-nandan-tripathi-475771216/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='icon-container black-inverse'
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://github.com/VayuTripathi09" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='icon-container black-inverse'
                >
                  <FaGithubSquare />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMe

