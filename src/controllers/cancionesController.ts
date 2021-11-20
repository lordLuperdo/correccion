const obtenerCanciones= (req,res)=>{
res.send('obtenerCanciones');
}

const obtenerCancion= (req,res)=>{
    res.send('obtenerCancion');
    }

const actualizarCancion= (req,res)=>{
    res.send('ualizarCancion');
    }    

    const eliminarCancion= (req,res)=>{
        res.send('eliminarCancio');
        }    


        const agregarCancion= (req,res)=>{
            res.send('agregarCancion');
            }      
            
 export{obtenerCanciones,obtenerCancion,actualizarCancion,eliminarCancion,agregarCancion}           