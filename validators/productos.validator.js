import { check, param } from "express-validator";
import productoMiddleware from "../middlewares/productos.middleware.js";

const productoDeleteValidator = [
    check('id')
        .isMongoId()
        .withMessage('Envío información incorrecta para el borrado'),
    productoMiddleware
]

const productoCreateValidator = [
    check('nombre')
        .notEmpty()
        .withMessage('El nombre es requerido')
        .trim(),
    check('precio')
        .isNumeric()
        .withMessage('El precio debe ser un número'),
    check('stock')
        .isNumeric()
        .withMessage('El stock debe ser un número'),
    productoMiddleware
]

const productoUpdateValidator = [
    check('id')
        .isMongoId()
        .withMessage('Envío información incorrecta para la actualización'),
    check('nombre')
        .notEmpty()
        .withMessage('El nombre es requerido'),
        check('precio')
        .isNumeric()
        .withMessage('El precio debe ser un número'),
    check('stock')
        .isNumeric()
        .withMessage('El stock debe ser un número'),
    productoMiddleware
]

const productoReadOneValidator = [
    param('id')
    .optional()
    .isMongoId()
    .withMessage('Envío información incorrecta para la lectura de un producto'),

productoMiddleware
]

export default {
    productoCreateValidator,
    productoDeleteValidator,
    productoUpdateValidator,
    productoReadOneValidator
}
