import { Sequelize } from "sequelize";
import { sequelize } from "../database/database.js"
import { Transferencia } from "../models/Transferencia.js"
import { Usuario } from "../models/Usuario.js";


export const crearTransferencia = async (req, res) => {

       const t = await sequelize.transaction();

    console.log(req.body)

    try {

 const { emisor, receptor, monto} = req.body;
  

        const transferencia = await Transferencia.create({
            emisor, receptor, monto, 
            
        }, 
        { transaction: t }); 

        const saldoEmisor = await Usuario.findByPk(emisor)
        saldoEmisor.balance = (parseFloat(saldoEmisor.balance) - parseFloat(monto));

       

        const saldoReceptor = await Usuario.findByPk(receptor)
        saldoReceptor.balance = (parseFloat(saldoReceptor.balance) + parseFloat(monto));

        await saldoEmisor.save();
        await saldoReceptor.save();

        await t.commit();


    } catch (error) {console.log("No se realizó la transferencia.")}
    
        
    }




export const obtenerTransferencias = async (req, res) => {
    const{emisor, receptor} = req.body;
    
    try {
        const transferencias = await Transferencia.findAll({include: Usuario});
        console.log(JSON.stringify(transferencias,null,2))
        res.json(transferencias)
    }
    catch (error) { return res.status(500).json({ message: error.message }); }

}