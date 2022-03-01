
import mongoose from "mongoose";

const Connection = async () => {
    try {
        const URL = `mongodb://nandini7637:@inshort-clone-shard-00-00.5xvsg.mongodb.net:27017,inshort-clone-shard-00-01.5xvsg.mongodb.net:27017,inshort-clone-shard-00-02.5xvsg.mongodb.net:27017/inshort-clone?ssl=true&replicaSet=atlas-p31tcq-shard-0&authSource=admin&retryWrites=true&w=majority`;

        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    }
    catch (error) {
        console.log('Error in establishing connection', error);
    }
}

export default Connection;