import mongoose from "mongoose";
 export const dbConnection =  () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName:"REASTAURANT",
}).then(()=>{
    console.log("Database connected successfully");
}).catch((err)=>{
    console.log(`Error in database connection! ${err}`);
})
}

//dbConnection