import React, { useEffect } from 'react'
import './Body.css'
import teamImage from '/assets/images/team.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

export default function Body() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <main className="main-content">

      <section className="hero">
        <div className="hero-content" data-aos="fade-right">
          <h1 className="hero-title">
            Welcome to - <span className="highlight"># Sangharsh Premier League
             2025</span>
          </h1>
          <p className="hero-subtitle">
            Where legends are made, and champions rise. Get ready for the ultimate showdown!
          </p>
          <a href="#teams" className="cta-btn">Explore Teams</a>
          <br></br>
          <br></br>
          <Link to="/schedules" className="cta-btn">Explore Schedules</Link>
        </div>
      </section>

      <section id="about" className="about-us">
        <h2 data-aos="fade-out" >About the League</h2>
        <p data-aos="fade-in">
          The Sangharsh Premier League (SPL) stands at the pinnacle of sporting excellence.
          Founded on the principles of passion, integrity, and innovation, SPL brings together
          the finest athletes and teams from around the globe. Season after season, we deliver
          world-class competition, unforgettable moments, and a platform for champions to emerge.
        </p>
      </section>

      <section id="teams" className="teams">
        <h2 data-aos="fade-right">Our Teams</h2>
        <div className="team-cards">
          <div className="team-card" data-aos="flip-left" data-aos-delay="100">
            <div className="team-logo">
              <img src={teamImage} alt="Team 1" className="team-logo-img" />
            </div>
            <h3>CSK</h3>
            <p>Coach: to be added</p>
            <p>Captain: to be added</p>
          </div>
          <div className="team-card" data-aos="flip-left" data-aos-delay="200">
            <div className="team-logo">
              <img src={teamImage} alt="Team 2" className="team-logo-img" />
            </div>
            <h3>RCB</h3>
            <p>Coach: to be added</p>
            <p>Captain: to be added</p>
          </div>
          <div className="team-card" data-aos="flip-left" data-aos-delay="300">
            <div className="team-logo">
              <img src={teamImage} alt="Team 3" className="team-logo-img" />
            </div>
            <h3>MI</h3>
            <p>Coach: to be added</p>
            <p>Captain: to be added</p>
          </div>
          <div className="team-card" data-aos="flip-left" data-aos-delay="400">
            <div className="team-logo">
              <img src={teamImage} alt="Team 4" className="team-logo-img" />
            </div>
            <h3>DC</h3>
            <p>Coach: to be added</p>
            <p>Captain: to be added</p>
          </div>
          <div className="team-card" data-aos="flip-left" data-aos-delay="500">
            <div className="team-logo">
              <img src={teamImage} alt="Team 5" className="team-logo-img" />
            </div>
            <h3>PBKS</h3>
            <p>Coach: to be added</p>
            <p>Captain: to be added</p>
          </div>
          <div className="team-card" data-aos="flip-left" data-aos-delay="600">
            <div className="team-logo">
              <img src={teamImage} alt="Team 6" className="team-logo-img" />
            </div>
            <h3>SRH</h3>
            <p>Coach: to be added</p>
            <p>Captain: to be added</p>
          </div>
        </div>
      </section>

      <hr />

      <section className="footer-cta" >
        <h2 data-aos="fade-up">
          Ready to be part of
          <br />
          <span className="highlight" data-aos="fade-down" >"THE History?"</span>
        </h2>
        <Link to="/register" className="cta-btn">Register Now!</Link>
      </section>

    </main>
  )
}
