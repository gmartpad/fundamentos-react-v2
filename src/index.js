import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

const root = document.getElementById('root')
// const tag = <strong>Olá, Mundo!</strong>


ReactDOM.render(
    <React.Fragment>
        {/* { tag } */}
        <Primeiro/>
        <ComParametro 
            titulo="Top das balada" 
            subtitulo="Rolezêra"/>
            <Fragmento/>
    </React.Fragment>,
    root
)