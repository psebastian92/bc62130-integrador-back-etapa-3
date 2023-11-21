import express from "express";
import routerProductos from "./routers/productos.router.js";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import routerUpload from "./routers/upload.router.js";

//Configuraciones
const app = express();
const PORT = process.env.PORT || 3000;
const corsConfig = {
  origin: "http://localhost:2222", // O colocar sino 127.0.0.1:2222
};

// 1.CONEXIÓN MONGODB

const conectar = async () => {
  try {
    await mongoose.connect(process.env.URI_MLOCAL);
    console.log('Conexión a Mongo realizada con éxito!');
  } catch (error) {
    console.log('Error al conectar a MongoDB', error);
  }
};

conectar()

// Middlewars
app.use(express.urlencoded({ extended: true })); // Decofificar el body enviado desde un formulario
app.use(express.json()); // Decodificar el body enviado desde un JSON
app.use(cors({ corsConfig }));

//  Rutas
app.use('/api/productos', routerProductos);
app.use('/api/upload',routerUpload)

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
