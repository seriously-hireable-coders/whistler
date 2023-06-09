import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { signup, signin } from './yourFileName.js';
import User from '../models/User.js';
import { handleError } from '../error.js';

jest.mock('bcryptjs');
jest.mock('jsonwebtoken');
jest.mock('../models/User.js');
jest.mock('../error.js');

describe('Signup Function', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new user, generate a token, and return user data', async () => {

    const req = {
      body: {
        username: 'testuser',
        password: 'testpassword',
      },
    };
    const res = {
      cookie: jest.fn(),
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };


    const genSaltSyncMock = jest.spyOn(bcrypt, 'genSaltSync').mockReturnValue('salt');
    const hashSyncMock = jest.spyOn(bcrypt, 'hashSync').mockReturnValue('hashedPassword');
    const saveMock = jest.fn();
    const signMock = jest.spyOn(jwt, 'sign').mockReturnValue('token');
    const userDocMock = {
      _id: '12345',
      _doc: {
        password: 'hashedPassword',
        otherProperty: 'otherValue',
      },
    };
    const userSaveMock = jest.spyOn(User.prototype, 'save').mockImplementation(saveMock);

    await signup(req, res);


    expect(genSaltSyncMock).toHaveBeenCalledWith(10);
    expect(hashSyncMock).toHaveBeenCalledWith('testpassword', 'salt');
    expect(User).toHaveBeenCalledWith({ ...req.body, password: 'hashedPassword' });
    expect(userSaveMock).toHaveBeenCalled();
    expect(signMock).toHaveBeenCalledWith({ id: '12345' }, process.env.JWT);
    expect(res.cookie).toHaveBeenCalledWith('access_token', 'token', { httpOnly: true });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ otherProperty: 'otherValue' });
  });

  it('should pass the error to the next middleware if an error occurs', async () => {

    const req = {
      body: {
        username: 'testuser',
        password: 'testpassword',
      },
    };
    const res = {};

    const genSaltSyncMock = jest.spyOn(bcrypt, 'genSaltSync').mockImplementation(() => {
      throw new Error('Some error occurred');
    });

    const nextMock = jest.fn();

    await signup(req, res, nextMock);


    expect(genSaltSyncMock).toHaveBeenCalledWith(10);
    expect(nextMock).toHaveBeenCalledWith(new Error('Some error occurred'));
  });
});

describe('Signin Function', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should find the user, compare passwords, generate a token, and return user data', async () => {

    const req = {
      body: {
        username: 'testuser',
        password: 'testpassword',
      },
    };
    const res = {
      cookie: jest.fn(),
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });
});