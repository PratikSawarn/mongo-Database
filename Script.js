const mongoose=require("mongoose");
const Users=require("./Users")

// connecting to database
mongoose.connect(
    "mongodb://127.0.0.1:27017/testdb"
);


run()
async function run(){
    // const User=new Users({name:"pratik",age:20})
    // await User.save()

    try{

        // ------------creating user by hard code and saving user to database---------

        // const User= await Users.create({
        //     name:"pratik",
        //     age:20,
        //     email:"pratik@gmail.com",
        //     hobbies:["coding","gymnastic","armwrestling"],
        //     address:{
        //         street:"rajeev nagar",
        //         city:"patna"
        //     }
        // })

        // filters----------
        // const User=await Users.deleteOne({name:"pratik"})
        // const User=await Users.where("name").equals("pratik")
        // const User=await Users.find({ age : { $gte:20 } },{name:1,age:1}).limit(2)
        // const User=await Users.countDocuments({"address.city":"patna"})
        // const User=await Users.updateOne({name:"pratik"},{$set:{name:"shiva"}})

        const User=await Users.findOne({age:{$gt:16}})
        console.log(User)
        User.sayHi()

    }catch(e){
        console.log(e.message);
    }
    
}


