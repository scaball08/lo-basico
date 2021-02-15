import React, { Fragment , useState} from 'react'

const Eventos = () => {
    const [texto,setTexto] = useState('Texto desde estado');
    const eventosClick = ()=>{
        console.log('me diste un click');
        setTexto('Texo se cambio por el estado')
    }
    return (
        <Fragment>
            <hr/>
            <h2>{texto}</h2>
            <button onClick={()=>eventosClick()}>Click</button>
        </Fragment>
    )
}

export default Eventos
