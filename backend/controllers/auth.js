import Users from "../modals/Users.js"
import bcrypt from 'bcryptjs'
import { createError } from "../utils/error.js";

export const register = async (req, res, next) => {

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    try {
        const newUser = new Users({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })

        await newUser.save()
        res.status(200).json("User has been created")
    } catch (err) {
        next(err)
    }
}


export const login = async (req, res, next) => {

    try {
      const user = await  Users.findOne({username:req.body.username})
      if(!user) return next(createError(404, "User not found!"))
      const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
      if(!isPasswordCorrect) return next(createError(404, "Wrong password or username"))
    
      const {password, isAdmin, ...otherDetails} = user._doc
      res.status(200).json({...otherDetails})
    } catch (err) {
        next(err)
    }
}