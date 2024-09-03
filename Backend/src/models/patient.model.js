import mongoose , {Schema} from 'mongoose'

const doctorSchema=new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    speciality:{
        type: String,
        required: true
    },
    experience:{
        type: Number,
        default: 0,
        required: true
    },
    education:{
        type:{
            degreeName:{
                type:String,
                required: true,
            },
            collegeName:{
                type:String,
                required: true,
            },
        },
        required: true
    }
})

export const Doctor=mongoose.model("Doctor",doctorSchema);