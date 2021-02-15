import React from 'react'

const Formulario = () => {
    const [fruta,setfruta] = React.useState('');
    const  [descripcion,setDescripcion] = React.useState('');
    const [lista,setLista] = React.useState([]);
    const guardarDatos = (event)=>{
        event.preventDefault();

       
        if (!fruta.trim()) {
            console.log('Esta vacio fruta');
            return
        }

        if (!descripcion.trim()) {
            console.log('Esta vacio descripcion');
            return
        }

        console.log('Procesando datos...' + fruta + ' ' +  descripcion);
        setLista(...lista,{nombreFruta:fruta,nameDescripcion:descripcion});
        event.target.reset();
        setDescripcion('');
        setfruta('');

    }
    return (
        <div className="row">
            <h2 >
                Formulario
            </h2>

            <form onSubmit={guardarDatos} className="d-grid gap-2 d-md-block" >
                <input type="text" 
                placeholder="Ingrese Fruta" 
                className="form-control mb-2" 
                onChange={(e)=>setfruta(e.target.value) }
                />

                <input type="text" 
                placeholder="Ingrese Descripcion" 
                className="form-control mb-2"
                onChange={e=>setDescripcion(e.target.value)}
                 />
                <button className="btn btn-primary btn-lg-block" type="submit">
                    Agregar
                </button>
               
            </form>
           <ul>
               
              { 
                lista.map((item,index)=> (
                <li key={index} 
                className="list-group-item">su fruta es {item.nombreFruta} y es {item.nameDescripcion} 
                </li>
                ) )
              }
             
           </ul>
        </div>
    )
}

export default Formulario
