import React from 'react'

const Formulario = () => {
    const [fruta,setfruta] = React.useState('');
    const  [descripcion,setDescripcion] = React.useState('');
    const [lista,setLista] = React.useState([]);
    let cont = 0;
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

        cont+=1;
        console.log('Procesando datos...' + fruta + ' ' +  descripcion);
        setLista([...lista,{id:cont,nombreFruta:fruta,nameDescripcion:descripcion}]);
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
           <ul className="list-group mt-2">
               
              { 
                lista.map((item,index)=> 
                {
                return (<li key={index} 
                className="list-group-item ">La fruta es: {item.nombreFruta} y es su descripcion: {item.nameDescripcion} 
                </li>) ;
                })
              }

          
             
           </ul>
        </div>
    )
}

export default Formulario
