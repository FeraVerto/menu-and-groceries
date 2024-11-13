import { MongoClient } from 'mongodb';

const main = async () => {
  const client = new MongoClient('mongodb://localhost:27017');
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db('myDatabase');
    //что-то делаем с базой
  } catch (error) {
    console.error('Error connection to MongoDB:', error);
  } finally {
    await client.close();
  }
};

main();
