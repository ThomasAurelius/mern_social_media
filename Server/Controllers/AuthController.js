import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";

//Registering User
export const registerUser = async (req, res) => {
   const { userName, email, password, firstName, lastName} = req.body;

   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(password, salt);
   
   const newUser = await UserModel.create({ userName, email, password: hashedPassword, firstName, lastName});
   try {
      await newUser.save()
      res.status(200).json({ newUser });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
}


//Login User
export const loginUser = async (req, res) => {
   const { userName, password } = req.body;

   try {
      const user = await UserModel.findOne({ userName: userName });
      !user && res.status(404).json({ message: "User not found" });

      const validPassword = await bcrypt.compare(password, user.password);
      !validPassword && res.status(400).json({ message: "Wrong password" });

      res.status(200).json({ user });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
}