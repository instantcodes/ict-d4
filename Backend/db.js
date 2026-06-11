import mongoose, { connect } from "mongoose";

mongoose
    .connect(
        "mongodb://<db_username>:TK9aKOY0SJnlICWm@ac-klmozcy-shard-00-00.yha7qs5.mongodb.net:27017,ac-klmozcy-shard-00-01.yha7qs5.mongodb.net:27017,ac-klmozcy-shard-00-02.yha7qs5.mongodb.net:27017/?ssl=true&replicaSet=atlas-7p4p41-shard-0&authSource=admin&appName=Cluster0"
    )
.then(()=>{
    console.log("Db connected");
})
 .catch((err) => {
    console.log(err);
 });

