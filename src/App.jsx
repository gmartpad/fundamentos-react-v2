import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default props => {
    return (
        <React.Fragment>
            <h2>Fundamentos React</h2>
            {/* { tag } */}
            <Primeiro/>
            <ComParametro 
                titulo="Top das balada" 
                subtitulo="Rolezêra"/>
                <Fragmento/>
        </React.Fragment>
    )
}