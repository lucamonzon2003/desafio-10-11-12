import http from './src/app.js';
import dbConfig from './src/services/databases/config/mongo.js';
import mongoose from 'mongoose'


const PORT = process.env.PORT;


mongoose.connect(dbConfig.mongoUri, dbConfig.config).then(() => {
    http.listen(PORT, () => console.info(`Server up and running on port ${PORT}`))
}).catch(err => {
    console.error(err.message)
})