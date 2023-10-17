import React from 'react'
import './ContactContent.scss'
function ContactContent() {
  return (
    <div className='ContactContent'>
        <div className="container">
            <div className="contact_inner">
                <h1>Get in <span>Touch</span></h1>
                <div className="contact_left">
                    <h1>Thank you for your interest in my portfolio!</h1>
                    <p>If you have any questions or would like to know more about certain piece, feel free to contact me. I am very approachable!</p>
                    <div>
                        <i class="bi bi-envelope-open"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactContent