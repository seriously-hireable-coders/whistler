import mongoose from 'mongoose';
import WhistleModel from './your-file.js';

describe('Whistle Model', () => {
  beforeAll(() => {

    mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
  });

  afterAll(async () => {

    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  it('should create and save a new whistle', async () => {
    // Create a new whistle
    const whistle = new WhistleModel({
      userId: 'user_id',
      description: 'This is a test whistle',
    });

    // Save the whistle to the database
    const savedWhistle = await whistle.save();

    // Assert that the saved whistle has the correct properties
    expect(savedWhistle.userId).toBe('user_id');
    expect(savedWhistle.description).toBe('This is a test whistle');
    expect(savedWhistle.likes).toEqual([]);

    // Assert that the saved whistle has an ID assigned by MongoDB
    expect(savedWhistle._id).toBeDefined();
  });
});
