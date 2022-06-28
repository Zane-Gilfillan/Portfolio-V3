import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss'

const Footer = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })

  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
      .them(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })

  }

  return (
    <>
      <h2 className="head-text">let's talk!</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:zane.gilfillan@gmail.com" className='p-text'>zane.gilfillan@gmail.com</a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +1 (312) 446-5971" className='p-text'>+1 (312) 446-5971</a>
        </div>
      </div>
    {!isFormSubmitted ?       
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className='p-text' type="text" placeholder='your name' name='name' value={name} onChange={handleChangeInput} />
        </div>
        <div className="app__flex">
          <input className='p-text' type="email" placeholder='your email' name='email' value={email} onChange={handleChangeInput} />
        </div>
        <div className=''>
          <textarea className='p-text' placeholder='your message' value={message} name="message" onChange={handleChangeInput} ></textarea>
        </div>
        <button className='p-text' type='button' onClick={handleSubmit}>{loading ? 'sending' : 'send message'}</button>
      </div> 
      : <div>
        <h3 className='head-text'> thanks for reaching out!</h3>
      </div>
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)