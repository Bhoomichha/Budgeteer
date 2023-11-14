const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const db = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Database Connected!`);
    } catch (error) {
        console.log('Connection Error');
    }

}

module.exports = {db};