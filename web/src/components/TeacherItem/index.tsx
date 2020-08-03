import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'
export default function TeacherItem(){
    return (
        <article className="teacher-item">
        <header>
        <img src="https://avatars0.githubusercontent.com/u/61329950?s=460&u=b1d454fdc4c0abdaaf9569866607b14a6a7e6677&v=4" alt="Breno Mendes"/>
            <div>
                <strong>Breno Mendes</strong>
                <span>Plao</span>
            </div>
        </header>
        <p>
            Apaixonado por tecnologia
            <br /><br/>
            Apaixonado por programação, fez o computador do Batman para prender os criminosos de Gotham
        </p>
        <footer>
            <p>
                Preço/hora
                <strong>R$ 50,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="whatsapp"/>
                Entrar em contato
            </button>
        </footer>
        </article>
    )
}