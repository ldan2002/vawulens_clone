import React from 'react'
import './contact.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'

const Contact = () => {
  return (
    <>
      <Header title='Get In Touch' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci accusantium at exercitationem, mollitia velit aliquid pariatur natus molestiae est inventore corporis ducimus sunt tempore aliquam eaque sapiente? Incidunt, debitis suscipit?
      </Header>
      <section className='contact'>
        <div className="container contact_container">
          <div className="contact_wrapper">
            <a href="mailto:" target='_blank'><MdEmail /></a>
            <a href="mailto:" target='_blank'><BsMessenger /></a>
            <a href="mailto:" target='_blank'><IoLogoWhatsapp /></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact