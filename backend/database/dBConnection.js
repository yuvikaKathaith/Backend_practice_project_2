import e from "express"
import mongoose from "mongoose"

const dBConnection = () => {
    mongoose.connect(process.env.MONGO_URI,
        {
            dbName: "Todo_app"
        }
    )
    .then(()=>{
        console.log("DB connected successfully!")
    })
    .catch((err) => {
        console.log(`Some error occured while connecting to database: ${err}`)
    })
}

export default dBConnection;