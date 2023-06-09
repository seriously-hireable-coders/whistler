import Whistle from "../models/Whistle.js";
import { handleError } from "../error.js";
import User from "../models/User.js";

export const createWhistle = async (req, res, next) => {
  console.log('whistle created'),
  console.log(req.body);

  const newWhistle = new Whistle(req.body);
  try {
    const savedWhistle = await newWhistle.save()
    res.status(200).json(savedWhistle);
  } catch (err) {
    handleError(500, err);
  }
};

export const deleteWhistle = async (req, res, next) => {

  try {
    const whistle = await Whistle.findById(req.params.id);
    if (whistle.userId === req.body.id) {
      await whistle.deleteOne();
      res.status(200).json("whistle deleted");
    } else {
      handleError(500, err);
    }
  } catch (err) {
    handleError(500, err);
  }
};

export const likeOrDislike = async (req, res, next) => {

  try {
    const whistle = await Whistle.findById(req.params.id);
    if (!whistle.likes.includes(req.body.id)) {
      await whistle.updateOne({ $push: { likes: req.body.id } });
      res.status(200).json("whistle liked");
    } else {
      await whistle.updateOne({ $pull: { likes: req.body.id } });
      res.status(200).json("whistle disliked");
    }
  } catch (err) {
    handleError(500, err);
  }
};

export const getAllWhistles = async (req, res, next) => {

  try {
    const currentUser = await User.findById(req.params.id);
    const userWhistles = await Whistle.find({ userId: currentUser._id });
    const followersWhistles = await Promise.all(
      currentUser.following.map((followerId) => {
        return Whistle.find({ userId: followerId });
      })
    );

    res.status(200).json(userWhistles.concat(...followersWhistles));
  } catch (err) {
    handleError(500, err);
  }
};

export const getUserWhistles = async (req, res, next) => {

  try {
    const userWhistles = await Whistle.find({ userId: req.params.id }).sort({
      createAt: -1,
    });

    res.status(200).json(userWhistles);
  } catch (err) {
    handleError(500, err);
  }
};

export const getExploreWhistles = async (req, res, next) => {

  try {
    const getExploreWhistles = await Whistle.find({ likes: { $exists: true } }).sort(
      { likes: -1 });

    res.status(200).json(getExploreWhistles);
  } catch (err) {
    handleError(500, err);
  }
};
