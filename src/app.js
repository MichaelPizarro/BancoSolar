import express from "express"
import projectsRoutes from "./routes/usuarios.routes.js"
import projectsTransferencias from "./routes/transferencias.routes.js"
const app = express();

//middlewares 
app.use(express.json());

app.use(projectsRoutes);

app.use(projectsTransferencias);



export default app;