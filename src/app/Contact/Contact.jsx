import React from 'react'
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons'

export default function Contact() {
    return (
        <div>
            <footer>
                <div className="footer-content">
                    <h3 id='contact'>Contact Us</h3>
                    <h6 className='text-center pt-2'>+92-3122973953</h6>
                    <ul className='d-flex justify-content-center gap-2 pt-3 contactUl'>
                        <li><Facebook /></li>
                        <li><Twitter /></li>
                        <li><Github /></li>
                        <li><Linkedin /></li>
                        <li><Instagram /></li>
                    </ul>

                </div>
            </footer>
        </div>
    )
}
