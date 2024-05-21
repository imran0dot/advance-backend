import app from "./app";
import config from '../src/config/index';
import mongoose from "mongoose";

const main = async() => {
    try{
        const db_connect = await mongoose.connect(config.db_url as string);
        if(db_connect){
            console.log(`db connect successfully`)
        }
    }
    catch(err){
        throw new Error(`DB Connection error ${err}`)
    }
};

main();

app.listen(config.port, () => {
    console.log(`your server is running on the port http://localhost:${config.port} `)
})