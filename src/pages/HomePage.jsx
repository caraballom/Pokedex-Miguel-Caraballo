import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerName } from '../store/slices/trainerName.slice'
import '../components/HomePage.css'

const HomePage = () => {
    const inputName = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainerName(inputName.current.value.trim()))
        navigate('/pokedex')
    }

    return (
        <div className="homePage">
            <section className="section1">
                <img className="home-title" src="imageportada.png" alt="" />
                <h2 className="home-welcome">
                    ¡Hi Trainer!
                    </h2>
                <p className="home-p">
                    To start, plase give me you trainer name
                    </p>
                <form className="home-form" onSubmit={handleSubmit}>
                    <input className="home-input" ref={inputName} type="text" />
                    <button className="home-btn">
                        Catch them all!
                    </button>
                </form>
            </section>
        </div>
    )
}

export default HomePage