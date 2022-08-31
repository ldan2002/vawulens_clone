import React from 'react'
import './about.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'


const About = () => {
  return (
    <>
      <Header title='About Us' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate distinctio, molestias rem repellat corporis consectetur.
      </Header>

      <section className='about_story'>
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
              dignissimos tenetur! Veniam corrupti magni iusto recusandae eos ea necessitatibus modi facere saepe odio.
              Cupiditate recusandae sunt aliquam soluta, quae temporibus quia quos quam eius ut tenetur officiis dolor! Laudantium, earum!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consequuntur consectetur asperiores. Velit inventore recusandae nesciunt accusamus!
              Ex, at quo, optio, officia voluptate eum vel consectetur mollitia blanditiis quod corporis.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, nostrum! A optio enim eos pariatur officiis nesciunt cum sunt quasi.</p>
          </div>
        </div>
      </section>

      <section className='about_Vision'>
        <div className="container about_Vision-container">
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
              dignissimos tenetur! Veniam corrupti magni iusto recusandae eos ea necessitatibus modi facere saepe odio.
              Cupiditate recusandae sunt aliquam soluta, quae temporibus quia quos quam eius ut tenetur officiis dolor! Laudantium, earum!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consequuntur consectetur asperiores. Velit inventore recusandae nesciunt accusamus!
              Ex, at quo, optio, officia voluptate eum vel consectetur mollitia blanditiis quod corporis.</p>
          </div>
          <div className="about_section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>

      <section className='about_mission'>
        <div className="container about_mission-container">
          <div className="about_section-image">
            <img src={MissionImage} alt="Our Story Image" />
          </div>
          <div className="about_section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
              dignissimos tenetur! Veniam corrupti magni iusto recusandae eos ea necessitatibus modi facere saepe odio.
              Cupiditate recusandae sunt aliquam soluta, quae temporibus quia quos quam eius ut tenetur officiis dolor! Laudantium, earum!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consequuntur consectetur asperiores. Velit inventore recusandae nesciunt accusamus!
              Ex, at quo, optio, officia voluptate eum vel consectetur mollitia blanditiis quod corporis.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, nostrum! A optio enim eos pariatur officiis nesciunt cum sunt quasi.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About