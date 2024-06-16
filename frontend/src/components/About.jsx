import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
        <div className="cont">
            <section className="about-section">
                <img src="/img/img1.jpg" alt="About Us"/>
                <div className="content">
                    <h2>About Us</h2>
                    <p className="palt">Welcome to GRAMURJA, a non-profit organization dedicated to the holistic development and empowerment of rural communities. Our key initiatives, GRAMUDYAM and GRAMHUNAR, are designed to address the unique challenges faced by rural populations, particularly in the areas of education, entrepreneurship, and community development.</p>
                </div>
            </section>

            <section className="about-section">
                <img src="/img/pic2.png" alt="Our Inspiration"/>
                <div className="content">
                    <h2>Our Inspiration</h2>
                    <p className="palt">Our founder, Mr. Dadasaheb Gaikwad, comes from a farmer's family and has a profound understanding of rural life. After completing his master’s degree in business studies and gaining over five years of experience in the corporate sector, Dadasaheb was driven by a passion to work with rural communities. His participation in the Chief Minister’s Rural Development Fellowship Program provided him with grassroots-level experience, working directly with government machinery, end beneficiaries, and other stakeholders. His dedication to rural development has earned him several prestigious fellowships and opportunities to enhance his leadership skills, including the IATSS Japan Fellowship Program, Vision India Fellowship Program, and the Anubhav Lecture Series by the Harris School of Public Policy at the University of Chicago in India.</p>
                </div>
            </section>

            <section className="about-section">
                <img src="/img/img3.png" alt="Gram Hunar Fellowship Programme"/>
                <div className="content">
                    <h2>Gram Hunar Fellowship Programme</h2>
                    <p className="palt">The Gram Hunar Fellowship Programme aims to provide quality education to all children in Maharashtra. By building a network of empowered educational leaders from the community, we strive to bring transformational change to the rural education system. We believe that the engagement of all stakeholders—teachers, school management committees, parents, students, and panchayats—is essential to improving education quality at the village level. According to the ASER report 2018, nearly 50% of students in rural Maharashtra struggle with basic literacy and numeracy skills. The Gram Hunar Fellowship Programme addresses this issue by nurturing and transforming children and youth, ultimately fostering sustainable village development.</p>
                </div>
            </section>

            <section className="about-section">
                <img src="/img/img2.png" alt="Entrepreneurship Development Webinars"/>
                <div className="content">
                    <h2>Entrepreneurship Development Webinars</h2>
                    <p className="palt">To empower rural youth and aspiring women to achieve financial independence, GRAMURJA conducts entrepreneurship seminars. In 2021, these seminars transitioned to webinars, providing orientation and informative sessions for budding entrepreneurs in rural Maharashtra. These webinars focus on agro-allied entrepreneurship and government schemes for seed funding. Experts from the District Entrepreneurship Development Cell guide participants through various employment guarantee programs from the Prime Minister and Chief Minister of Maharashtra.</p>
                </div>
            </section>

            <section className="about-section">
                <img src="/img/img5.png" alt="Women Entrepreneurship Training & Guidance"/>
                <div className="content">
                    <h2>Women Entrepreneurship Training & Guidance</h2>
                    <p className="palt">Believing in the untapped potential of rural women, GRAMURJA, in collaboration with Gopalpur Gram Panchayat, conducts training sessions for women aspiring to start and scale small businesses. This program provides detailed information on utilizing available resources and government schemes for marketing and business growth. By empowering women with entrepreneurial opportunities, we aim to unlock their potential and drive community development.</p>
                </div>
            </section>
        </div>
    </>
  )
}

export default About
