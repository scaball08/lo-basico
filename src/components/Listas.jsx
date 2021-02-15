import React ,{useState} from 'react'

const Listas = () => {

    // const estadoInicial = [1,2,3,4,5];

    
    const estadoInicial = [
        {id:1,text:'tarea 1'},
        {id:2,text:'tarea 2'},
        {id:3,text:'tarea 3'},
    ];

    const agregarElemento = ()=>{
        console.log('agegando Elemento');
        setLista([...lista,{id:4,text:'Nuevo texto'}])
    }

    const [lista,setLista] = useState(estadoInicial);
    return (
        <div>
           <h2>
               Listas
           </h2> 
           {
               lista.map((item,index)=> (
                   <h4 key={index}> {item.text}</h4>
               ) )
           }
           <button onClick={()=>agregarElemento()}>Agregar</button>
        </div>
    )
}

export default Listas
