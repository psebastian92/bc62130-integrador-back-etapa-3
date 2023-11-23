import express from "express";
import routerProductos from "./routers/productos.router.js";
import cors from "cors";
import "dotenv/config";
import routerUpload from "./routers/upload.router.js";
import routerCarrito from "./routers/carrito.router.js";
import handleConnection from "./utils/handleConnection.js";

//Configuraciones
const app = express();
const PORT = process.env.PORT || 3000;
const corsConfig = {
  origin: "http://localhost:2222", // O colocar sino 127.0.0.1:2222
};

// 1.CONEXIÓN MONGODB

handleConnection(process.env.URI_MLOCAL)
// URI_MREMOTA

// Middlewars
app.use(express.urlencoded({ extended: true })); // Decofificar el body enviado desde un formulario
app.use(express.json()); // Decodificar el body enviado desde un JSON
app.use(cors({ corsConfig }));

//  Rutas
app.use('/api/productos', routerProductos)
app.use('/api/upload', routerUpload)
app.use('/api/carritos', routerCarrito)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.all("*", (req, res) => {
  res
    .status(404)
    .send(
      `La ruta  ${req.url} utilizando el método ${req.method} no está disponible`
    );
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
