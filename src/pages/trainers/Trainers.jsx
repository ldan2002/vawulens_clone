import React from 'react'
import './trainers.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_4.jpg'
import Trainer from '../../components/Trainer'
import { trainers } from '../../data'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'



const Trainers = () => {
  return (
    <>
      <Header title='Our Trainer' image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit atque corporis, cum adipisci voluptates sint quae cupiditate nobis enim? In beatae eos dignissimos soluta consequuntur. Illum consequuntur provident dolor at!
      </Header>
      <section className='trainers'>
        <div className="container trainers_container">
          {
            trainers.map(({ id, image, name, job, socials }) => {
              return <Trainer key={id} image={image} name={name} job={job}
                socials={
                  [
                    { icon: <BsInstagram />, link: socials[0] },
                    { icon: <AiOutlineTwitter />, link: socials[1] },
                    { icon: <FaFacebookF />, link: socials[2] },
                    { icon: <FaLinkedinIn />, link: socials[3] }
                  ]
                }
              />
            })
          }
        </div>
      </section>
    </>
  )
}

export default Trainers