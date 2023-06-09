``
import express from 'express';
import { verifyToken } from '../verifyToken.js';
import { createWhistle, deleteWhistle, likeOrDislike, getAllWhistles, getUserWhistles, getExploreWhistles } from '../controllers/whistle.js';

const router = express.Router();

// Create a new whistle
router.post('/', verifyToken, createWhistle);

// Delete a whistle
router.delete('/:id', verifyToken, deleteWhistle);

// Like or Dislike Whistle
router.put('/:id/like', likeOrDislike)

// Get all timeline whistles
router.get("/timeline/:id", getAllWhistles);

// Get user whistles only
router.get('/user/all/:id', getUserWhistles);

//explore
router.get('/explore', getExploreWhistles);

export default router;