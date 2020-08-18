import React from 'react'
import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars0.githubusercontent.com/u/15218796?s=460&u=4fb773a4eb09e96416775c03ceb99e59266b876e&v=4" alt="Joao Buch"/>
            <div>
                <strong>João Buch</strong>
                <span>Angular</span>
            </div>
        </header>

        <p>
        I am a frontend developer passionate about what I do.
        <br/>
        Proactive, always trying to be up to par the news of the market, obtaining professional development. Today I work with Angular, React , jQuery , Node.js, UX/UI.
        </p>
        <footer>
            <p>Usd/hour
            <strong>$50.00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Contact me!
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem