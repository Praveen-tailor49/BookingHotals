import Hotal from "../modals/Hotal.js";

export const createHotal = async (req,res,next) => {
    const newHotal = new Hotal(req.body)
    
    try{
        const saveHotal = await newHotal.save()
        res.status(200).json(saveHotal)
    }catch(err){
        next(err)
    }
}

export const updateHotal = async (req,res,next) => {
    try{
        const updateHotal = await Hotal.findByIdAndUpdate(req.params.id, { $set: req.body},
            { new: true})
        res.status(200).json(updateHotal)
    }catch(err){
        res.status(500).json(err)
    }
}

export const deleteHotal = async (req,res,next) => {
    try{
        await Hotal.findByIdAndDelete(req.params.id)
       res.status(200).json("Hotal has been deleted")
   }catch(err){
       res.status(500).json(err)
   }
}

export const getHotal = async (req,res,next) => {
    
        try{
            const hotal = await Hotal.findById(req.params.id)
            res.status(200).json(hotal)
        }catch(err){
            res.status(500).json(err)
        }
}

export const getHotals = async (req,res,next) => {
    try{
        const hotals = await Hotal.find()
        res.status(200).json(hotals)
    }catch(err){
        next(err)
    }
}