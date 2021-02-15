import React from 'react'

const Variables = () => {
    const saludo = 'Hola desde la constante'
    const imagen  = 'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&fit=crop&w=1080&q=80&fit=max';

    return (
        <div>
            <h2>Nuevo Componente {saludo}</h2>
            <img src={imagen} alt="mi imagen"/>
        </div>
    )
}

export default Variables
