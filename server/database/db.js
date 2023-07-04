import mongoose  from 'mongoose';

const Connection = async () => {
    const URL = `mongodb+srv://shivom:774SjjYF7yEP8z0D@shivcluster.vjwtc53.mongodb.net/?retryWrites=true&w=majority`;
    
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;