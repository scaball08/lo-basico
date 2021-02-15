import React from 'react'

const Contador = () => {
    const [contador,setContado] = React.useState(0);
    const aumentar = ()=>{
        console.log('Click');
        setContado(contador + 1);
    }
    return (
        <div>
            <h2>Contador</h2>
            <h3>Nuetro numero aumentado:{contador}</h3>
            <h4>
                {
                  contador > 2 ? 'Es Mayor a 2' : 'Es menor a 2'
                }
            </h4>
            <button onClick={()=> aumentar()} >Aumentar</button>
        </div>
    )
}

export default Contador
