// Import the necessary dependencies for testing
import { getUser, update, deleteUser, follow, unFollow } from './userController';
import User from '../models/User';

// Mock the required dependencies
jest.mock('../models/User');

describe('User Controller', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getUser', () => {
    it('should return the user if found', async () => {
      const mockUser = { _id: 'user_id', name: 'John Doe' };
      User.findById.mockResolvedValue(mockUser);

      const req = { params: { id: 'user_id' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const next = jest.fn();

      await getUser(req, res, next);

      expect(User.findById).toHaveBeenCalledWith('user_id');
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockUser);
      expect(next).not.toHaveBeenCalled();
    });

    it('should call the error handler if an error occurs', async () => {
      const mockError = new Error('Database error');
      User.findById.mockRejectedValue(mockError);

      const req = { params: { id: 'user_id' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const next = jest.fn();

      await getUser(req, res, next);

      expect(User.findById).toHaveBeenCalledWith('user_id');
      expect(next).toHaveBeenCalledWith(mockError);
      expect(res.status).not.toHaveBeenCalled();
      expect(res.json).not.toHaveBeenCalled();
    });
  });

  // Add tests for other controller methods (update, deleteUser, follow, unFollow) in a similar manner
});
