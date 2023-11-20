import mongoose, { mongo } from "mongoose";

// CREAMOS EL ESQUEMA

const productosSchema = mongoose.Schema({
  nombre: String,
  precio: Number,
  stock: Number,
  marca: String,
  categoria: String,
  detalles: String,
  foto: String,
  envio: Boolean,
});

// CREAMOS EL MODELO
const ProductosModel = mongoose.model("productos", productosSchema);

/* ------------------------------------------------------------------- */
/* Métodos que nos van a servir de interfaz para interactuar con la DB */
/* ------------------------------------------------------------------- */

const leerProducto = (id) => {};

const leerProductos = async () => {
    try {
        const productos = await ProductosModel.find({})
        return productos
    } catch (error) {
        console.log('[leerProductos]: algo no salio bien...',error)
    }
};

const guardarProducto = (productoNuevo) => {};

const modificarProducto = (id, productoAEditar) => {};

const eliminarProducto = (id) => {};

export default {
  leerProducto,
  leerProductos,
  guardarProducto,
  modificarProducto,
  eliminarProducto,
};
