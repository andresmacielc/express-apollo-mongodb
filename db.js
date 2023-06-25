const {connect} = require ('mongoose')

const connectDB = async () => {
    try {
        await connect("mongodb://127.0.0.1/tasksdb");
        console.log('Mongodb connected')
    } catch (error) {
        console.log(error);
    }
};

module.exports = {connectDB}