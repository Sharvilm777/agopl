import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://Sharvil:sharvilm143@cluster0.6e3jweq.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let cachedDb = null;

async function connectToDatabase() {
    if (cachedDb) {
        return cachedDb;
    }

    try {
        await client.connect();
        const db = client.db('agopl');
        cachedDb = db;
        return db;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

export default connectToDatabase;
