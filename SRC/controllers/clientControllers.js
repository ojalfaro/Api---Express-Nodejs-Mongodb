import { Client } from "../model/clientsModels.js";

export const GetClients = async (req,res) => {
    const {page =1} = req.query
    const totalRegisSugerido = 3
   
    const totalCount = await Client.countDocuments()

    const limit = Math.ceil(totalCount/totalRegisSugerido)
    const skip = (page - 1 )* limit

    const result = await Client.find().limit(limit).skip(skip).exec();

    return res.status(200).json({
        success:true,
        message:"Get all clients",
        data: result,
        totalCount:totalCount,
        totalPages:Math.ceil(totalCount/limit),
        limit:limit,
        currentPage: parseInt(page,10)
    })
}

export const GetClientsById = async (req,res) => {
    const {id} = req.params
    
    const result = await Client.findById(id)

    return res.status(200).json({
        success:true,
        message:"Get all clients",
        data: result
       
    })
}

export const createClients = async (req,res) => {
    const clients = req.body
    
    try {
        const result = await Client.create(clients)
        return res.send({
            success: true,
            message:"Clients list is created successfully",
            data:result
        })
    }
    catch (error) {
        console.log(error)
        return res.send({
            success: true,
            message:"Failed to created Clients list  successfully",
            data:[]
        })
    }
}


export const updateClients = async (req,res) => {
    const {id} = req.params
    const clients = req.body
    
    try {
        const result = await Client.findByIdAndUpdate(id,clients)
        return res.send({
            success: true,
            message:"Clients list is updated successfully",
            data:result
        })
    }
    catch (error) {
        console.log(error)
        return res.send({
            success: true,
            message:"Failed to created updated list  successfully",
            data:[]
        })
    }
}

export const deletedClients = async (req,res) => {
    const {id} = req.params

    try {
        const result = await Client.findByIdAndDelete(id)
        return res.send({
            success: true,
            message:"Clients list is deleted successfully",
            data:result
        })
    }
    catch (error) {
        console.log(error)
        return res.send({
            success: true,
            message:"Failed to deleted Clients list  successfully",
            data:[]
        })
    }
}