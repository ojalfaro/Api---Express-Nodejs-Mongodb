

import mongoose,{ model,Schema } from "mongoose";

const clientSchema = new Schema({
    name: {type: String},
    email: {type: String,required:true}
});

export const Client = mongoose.models.Client || new model("Client",clientSchema)