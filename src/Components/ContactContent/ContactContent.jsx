import React from 'react'
import './ContactContent.scss'
function ContactContent() {
  return (
    <div className='ContactContent'>
        <div className="container">
            <div className="contact_inner">
                <h1 className='contact_title'>Get in <span>Touch</span></h1>
                <div className="contact_hero">
                    <div className="contact_left">
                        <h1 className='contact_left_title'>Thank you for your interest in my portfolio!</h1>
                        <p className='contact_left_definiton'>If you have any questions or would like to know more about certain piece, feel free to contact me. I am very approachable!</p>
                        <div className='contact_mail'>
                            <a href="https://begzodxusanboyev02@mail.ru">
                                <i class="bi bi-envelope-open"></i>
                            </a>
                            <div>
                                <h4>Mail me</h4>
                                <p>begzodxusanboyev02@mail.ru</p>
                            </div>
                        </div>
                        <div className="contact_phone">
                            <i class="bi bi-telephone"></i>
                            <div>
                                <h4>Call me</h4>
                                <p> +998998438339</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact_right">
                        <div className='contact_right_inps'>
                            <input type="text" placeholder='Your First Name' />
                            <input type="text" placeholder='Your Last Name' />
                            <input type="email" placeholder='Your Message' />
                            <textarea className='contact_textarea' placeholder='Your Message' name="" id="" cols="30" rows="10"></textarea>
                            <button className='contact_send'>Send Message <i class="bi bi-send"></i></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactContent