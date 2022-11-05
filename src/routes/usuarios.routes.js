import { Router } from "express"
import {crearUsuario, obtenerUsuarios, editarUsuario, eliminarUsuario} from "../controllers/usuarios.controller.js"

const router = Router();

router.get('/', (req, res)=>{

    try {
        res.sendFile('index.html', {root: './src/html'})

    } catch (error) {
        console.log(error)
    }
    
});

router.post('/usuario', crearUsuario);

router.get('/usuarios', obtenerUsuarios);

router.put('/usuario/:id', editarUsuario);

router.delete('/usuario/:id', eliminarUsuario);

// router.post('/projects', createProject);

// router.put('/projects/:id', updateProject);



// router.get('/projects/:id', getProjects);


export default router;