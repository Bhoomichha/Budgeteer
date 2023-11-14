const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const db = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`DB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log('Connection Error');
    }

}

module.exports = {db};