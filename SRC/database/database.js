import mongoose from 'mongoose';
import { DB_URI_MG } from '../config.js';

const connectToDB = async () => {
    await mongoose.connect(DB_URI_MG).then((res) => {
        console.log("Mongodb is conected succefully")
    })
}

export default connectToDB;