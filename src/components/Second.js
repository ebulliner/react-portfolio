import React from 'react'
import './styles/Second.css'
import probonopals from './assets/probonopals.png'
import employeeTracker from './assets/employee-tracker.png'


const Second = () => {
    return (
        <section className='section-2'>
            <h1 className='about-me'>About Me</h1>
            <div className="container-2">
                <div className="image-cont">
                    <a href="https://pro-bono-pals.herokuapp.com/">
                        <p>ProBonoPals Team Project Repo</p>
                    <img src={probonopals} alt="" />
                    </a>
                </div>
                    
                <div className="image-cont">
                    <a href="https://github.com/ebulliner/bestemployeetracker">
                        <p>Employee Tracker Back-End App Repo</p>
                    <img src={employeeTracker} alt=""/>
                    </a>
                </div>

                <div className="text-2">
                    <p>Full Stack Developer</p>
                    <p>React, JavaScript, & Node Developer</p>
                    <p>MERN Stack Developer</p>
                    <p>Completed a coding bootcamp at Northwestern</p>
                    <p>Very eager to learn and a self starter</p>
                    <p>Great communication, and time management</p>
                </div>
            </div>
        </section>
    )
}

export default Second