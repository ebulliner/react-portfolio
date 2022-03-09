import React from 'react'
import evan from './assets/man.jpeg'
import './styles/Section.css'


const Section = () => {
    return (
        <section className='main-section'>
            <div className='container'>


                <div className="texts">
                    <h1>Hi, My Name is</h1>
                    <h1 className='h1-big'>Evan Bulliner</h1>
                    <p>I am a Software Engineer/Full Stack Developer who graduated the coding bootcamp at Northwestern.</p>
                    <button className='text-button'>My Work</button>
                </div>

                <div className="image">
                    <img src={evan} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Section