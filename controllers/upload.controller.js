const uploadImagen = (req, res, next) => {
    // Verificar si se recibió un archivo en la solicitud
    const file = req.file
    if (!file) {
        return res.status(400).send('No se recibió ninguna imagen')
    }

    // Construir la URL completa de la imagen cargada
    const urlCompletaBack = `${req.protocol}://${req.get('host')}/uploads/${file?.filename}`

    // Enviar una respuesta con la URL de la imagen
    res.status(200).json({ foto: urlCompletaBack })
}

export default {
    uploadImagen
}
