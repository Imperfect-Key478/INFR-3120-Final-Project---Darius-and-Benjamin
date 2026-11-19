
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

let db;

async function connectDB() {
    try {
        await client.connect();

        db = client.db('financial_website');

        console.log('MongoDB connected successfully');

        return db;
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
    }
}

function getDB() {
    if (!db) {
        throw new Error('Database has not been connected');
    }

    return db;
}

module.exports = { connectDB, getDB };
