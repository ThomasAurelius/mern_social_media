import mongoose from "mongoose";

const userSchema = mongoose.Schema({
   
   password: {
      type: String,
      required: true,
      minlength: 5,
   },
   firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
   },
   lastName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
   }, 
   email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 5,
   },
   isAdmin: {
      type: Boolean,
      default: false,
   },
   profilePicture: {
      type: String,
      default: "",
   },
   coverPicture: {
      type: String,
      default: "",
   },
   about: {
      type: String,
      default: "",
   },
   livesIn: {
      type: String,
      default: "",
   },
   worksAt: {
      type: String,
      default: "",
   },
   status: {
      type: String,
      default: "",
   },
   followers: {
      type: Array,
      default: [],
   },
   following: {
      type: Array,
      default: [],
   },
}, {
   timestamps: true,
});

const UserModel = mongoose.model("Users", userSchema);
export default UserModel;