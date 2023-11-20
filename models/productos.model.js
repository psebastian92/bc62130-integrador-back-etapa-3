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

const leerProducto = async (id) => {
    try {
      const producto = await ProductosModel.findById(id)
      return producto
    } catch (error) {
      console.log('No se pudo leer el producto con el id',error)
    }
};

const leerProductos = async () => {
  try {
    const productos = await ProductosModel.find({});
    return productos;
  } catch (error) {
    console.log("[leerProductos]: algo no salio bien...", error);
  }
};

const guardarProducto = async (productoNuevo) => {
  try {
    const productoAlmacenado = new ProductosModel(productoNuevo);
    await productoAlmacenado.save();
    return productoAlmacenado;
  } catch (error) {
    console.log('ERROR (GUARDAR PRODUCTOS), no se pudo guardar en la DB', error)
  }
};

const modificarProducto = async (id, productoAEditar) => {
   try {
    const productoModificado = await ProductosModel.findByIdAndUpdate(id, productoAEditar)
    return productoModificado
   } catch (error) {
    console.log('ERROR[modificarProducto]: No se pudo actualizar el producto',error)
   }
};

const eliminarProducto = async (id) => {
  try {
    const productoBorrado = await ProductosModel.findByIdAndDelete(id)
    return productoBorrado
  } catch (error) {
    console.log('ERROR (ELIMINAR PRODUCTO) en la db', error)
  }
};

export default {
  leerProducto,
  leerProductos,
  guardarProducto,
  modificarProducto,
  eliminarProducto,
};
