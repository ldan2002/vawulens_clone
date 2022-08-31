import React from 'react'
import Logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <div className="container footer_container">
                <article>
                    <Link to={'/'} className='logo'>
                        <img src={Logo} alt="Footer Logo" />
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ab ad numquam magnam commodi dolor.</p>
                    <div className="footer_socials">
                        <a href="https://www.linkedin.com/" target='_blank' rel='noreferrer noopener'><FaLinkedin /></a>
                        <a href="https://www.facebook.com/ledaian22/" target='_blank' rel='noreferrer'><FaFacebookF /></a>
                        <a href="https://twitter.com/?lang=vi" target='_blank' rel='noreferrer '><AiOutlineTwitter /></a>
                        <a href="https://www.instagram.com/ld_an2708/" target='_blank' rel='noreferrer '><AiFillInstagram /></a>
                    </div>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to='/about'>About</Link>
                    <Link to='/plans'>Plans</Link>
                    <Link to='/trainers'>Trainers</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/contact'>Contact</Link>
                </article>
                <article>
                    <h4>Insights</h4>
                    <Link to='/s'>Blog</Link>
                    <Link to='/s'>Case Studies</Link>
                    <Link to='/s'>Events</Link>
                    <Link to='/s'>Communities</Link>
                    <Link to='/s'>FAQs</Link>
                </article>
                <article>
                    <h4>Get In Touch</h4>
                    <Link to='/contact'>Contact Us</Link>
                    <Link to='/s'>Support</Link>
                </article>
            </div>
            <div className="footer_copyright">
                <small>2022 Nguồn Đâu Đó Trên Mạng Coppy Bởi: Lê Đại An</small>
            </div>
        </footer>
    )
}

export default Footer