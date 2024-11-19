const mongoose = require('mongoose');

// Get MongoDB connection URL from environment variable
const mongo_url = process.env.MONGO_CONN;

const connectDB = async () => {
    try {
        // Connect to MongoDB using the connection URL
        await mongoose.connect(mongo_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error('MongoDB Connection Error:', err);
        process.exit(1); // Exit the process if the connection fails
    }
};

// Connect to DB
connectDB();

