import mongoose from "mongoose";
import UserModel from "./UserModel"; 

describe("User Model", () => {
  beforeAll(async () => {
    await mongoose.connect("mongodb://localhost/testdb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("should create a new user", async () => {
    expect.assertions(1);

    const userData = {
      username: "john_doe",
      email: "john@example.com",
      password: "password123",
    };

    const user = await UserModel.create(userData);

    expect(user).toMatchObject(userData);
  });
});
