
import { Usuario } from "../models/Usuario.js"


export const crearUsuario = async (req, res) => {
   console.log(req.body);
    const { nombre, balance } = req.body
    try {
        const newUsuario = await Usuario.create({
            nombre, balance
        });

        res.json(newUsuario);
    }

    catch (error) { return res.status(500).json({ message: error.message }); }
};


export const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll()
        console.log(usuarios)
        res.json(usuarios)
    }
    catch (error) { return res.status(500).json({ message: error.message }); }

}

export const editarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, balance } = req.body
        const usuario = await Usuario.findByPk(id)
        usuario.nombre = name
        usuario.balance = balance

        await usuario.save()

    res.json(usuario)
} catch (error) {
    return res.status(500).json({ message: error.message })
}};


export const eliminarUsuario = async (req, res) => {
    try {
        const { id } = req.params
        await Usuario.destroy({
            where: { id },
        });

        res.sendStatus(204)
    }
    catch (error) {
        return res.Status(500).json({ message: error.message });
    }
};



