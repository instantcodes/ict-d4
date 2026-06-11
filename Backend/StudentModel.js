import mongoose from "mongoose";

//schema creation
var StudentSchema = mongoose.Schema({
    sname: String,
    semail: String,
    splace: String
});

//var studentModel = mongoose model (collection name, schema name)
var StdModel = mongoose.model("student", StudentSchema);

export default StdModel;

