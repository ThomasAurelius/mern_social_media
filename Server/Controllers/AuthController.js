import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//Registering User
//refactor to make it not send the password back to the client
export const registerUser = async (req, res) => {
   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(req.body.password, salt);
   req.body.password = hashedPassword;
   const newUser = new UserModel(req.body);
   const {email} = req.body;
   try {
      const oldUser = await UserModel.findOne({email});
      if(oldUser) return res.status(400).json({message: "Email already exists"});
      const user = await newUser.save()
      const token = jwt.sign({email: user.email, id: user._id}, process.env.JWT_SECRET, {expiresIn: "1h"});
      res.status(200).json({user,token});
      return
   } catch (error) {
      res.status(500).json({ message: error.message });
      return
   }
}


//Login User
//Refactor to make it not send hashed password back to client
export const loginUser = async (req, res) => {
   const { email, password } = req.body;

   try {
      const user = await UserModel.findOne({ email: email });
      !user && res.status(404).json({ message: "User not found" });

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
         res.status(400).json({ message: "Wrong password" }) 
         return
      } else {

      const token = jwt.sign({email: user.email, id: user._id}, process.env.JWT_SECRET, {expiresIn: "1h"});
      
      res.status(200).json({user, token});
      return
      }

      
   } catch (error) {
      res.status(500).json({ message: error.message });
      return
   }
}