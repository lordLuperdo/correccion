import  Express  from "express";
import cancionesRoutes from "./routes/playlist";
 const app = Express();
 const port= 3000;

 //body parsen
 app.use(Express.json());
 app.use(Express.urlencoded({ extended: true}))
 //fin bp

 //importo las rutas de playlist
cancionesRoutes(app);

app.get('/prueba/:id',(req,res,next)=>{
    console.log('antes de la promesa');
    const x=10;
    //creación de la promesa
    const promesa=new Promise((resolve,reject)=>{
        if(x==10){
            resolve('se resuelve la promesa'); 
        }else{
            reject('promesa rechazada');
        }
        });

    //el await es para que sea sincronico y no siga derecho a la promesa
     promesa.then((res)=>{
        console.log(res);
    }).catch(Error=>{
        console.log(Error);
    });
    console.log("despues de la promesa")

res.status(201).send("prueba del servidor");
})

 app.listen(port,()=>{
    
     return console.log(`el servidor esta corriendo sobre el puerto ${port}`);
 });
