import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import Primeiro from './components/basicos/Primeiro'

const root = document.getElementById('root')
// const tag = <strong>Olá, Mundo!</strong>


ReactDOM.render(
    <div>
        {/* { tag } */}
        <Primeiro/>
    </div>,
    root
)