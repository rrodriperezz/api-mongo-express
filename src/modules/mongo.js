
const mongoPath = `mongodb://127.0.0.1:27017/test`;

class MongoConnection {
  constructor() {
    this.mongoose = require("mongoose");
  }

  async connect() {
    await this.mongoose.connect(process.env.DATABASE_URL || mongoPath, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
  });
    console.log(`Connected to database`);
    return this.mongoose;
  }

  async disconnect() {
    await this.mongoose.connection.close();
    console.log(`Disconnected from database`);
  }
}

module.exports = { MongoConnection };
