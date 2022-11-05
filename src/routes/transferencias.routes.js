import {Router } from "express"
import {crearTransferencia, obtenerTransferencias} from "../controllers/transferencias.controller.js"

const router = Router();

router.post('/transferencia', crearTransferencia);

router.get('/transferencias', obtenerTransferencias);

export default router;
