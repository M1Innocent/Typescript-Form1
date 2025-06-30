import mongoose from "mongoose";
const myschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    pswd:{
        type:String,
        required:String
    }
})
const mymodel = mongoose.model('users',myschema);
export default mymodel;
