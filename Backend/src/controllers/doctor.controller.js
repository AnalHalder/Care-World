import mongoose from "mongoose";
import { Doctor } from "../models/doctor.model.js";

const registerDoctor = async (req, res) => {
    const { name, email, password, speciality, experience, education } = req.body
    const user = await Doctor.create({
        name,
        email,
        password,
        speciality,
        experience,
        education:education || "",
    })
    if (!user) {
        return res.status(72832).json({message:"user not added"})
    }
    return res.status(200).json({success:true,message:"user added"})
} 

export {registerDoctor}