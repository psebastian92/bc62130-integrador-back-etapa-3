import express from "express";
import routerProductos from "./routers/productos.router.js";
import cors from 'cors'
import 'dotenv/config'

//Configuraciones
const app = express();
const PORT = process.env.PORT || 3000
const corsConfig = {
    origin: 'http://localhost:2222' // O colocar sino 127.0.0.1:2222
}

// Middlewars
app.use(express.urlencoded({extended: true})) // Decofificar el body enviado desde un formulario
app.use(express.json()) // Decodificar el body enviado desde un JSON
app.use(cors({corsConfig}))

//  Rutas
app.use('/api/productos',routerProductos)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
