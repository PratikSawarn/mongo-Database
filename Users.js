const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    name:String,
    age:{
        type:Number,
        min:16,
        max:35
    },
    email:{
        type:String,
        required:true
    },
    createdAt:{
        immutable:true,
        type:Date,
        default:()=>Date.now()
    },
    updatedAt:{
        immutable:true,
        type:Date,
        default:()=>Date.now()
    },
    hobbies:[String],
    address:{
        street:String,
        city:String
    },
    bestfriend:{
        type:mongoose.SchemaTypes.ObjectId,

    }
})

// methods

UserSchema.methods.sayHi = function(){
    console.log(`hy my name is ${this.name}`)
}


module.exports=mongoose.model("Users",UserSchema);
