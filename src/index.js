import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

const root = document.getElementById('root')
const tag = <strong>Olá, Mundo!</strong>


ReactDOM.render(
    <div>
        { tag }
    </div>,
    root
)