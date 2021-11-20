import { Router } from "express";
import { actualizarCancion, agregarCancion, eliminarCancion, obtenerCancion, obtenerCanciones } from "../controllers/cancionesController";

const cancionesRoutes= (app)=>{

//para que todas las rutas de router esten vinculadas con el app

const router=Router();

//para que todas las rutas de router esten vinculadas con el app
app.use('/',router)

router.get('/obtenerCanciones',obtenerCanciones)
router.get('/obtenerCancion/:id',obtenerCancion,)
router.post('/agregarCancion',agregarCancion,)
router.put('/actualizarCancion',actualizarCancion,)
router.delete('/eliminarCancion',eliminarCancion,)

}

export default cancionesRoutes;