const mongoose = require("mongoose");
const Post = require("../database/portfolio/models/post");
const Message = require("../database/portfolio/models/message");

module.exports = {
  //BLOG
  allBlogPosts: (req, res) => {
    Post.find()
      .exec()
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(500).json({ error: err }));
  },
  oneBlogPosts: (req, res) => {
    const id = req.params.id;
    Post.findById(id)
      .exec()
      .then((doc) => res.status(200).json(doc))
      .catch((err) => res.status(500).json({ error: err }));
    //res.status(200).json({});
  },
  newBlogPost: (req, res) => {
    const post = new Post({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      body: req.body.body,
      author: req.body.author,
    });

    post
      .save()
      .then((result) => {
        console.log(result);
        res.status(200).json(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });

    return res.send(product);
  },
  editBlogPost: (req, res) => {},
  deleteBlogPost: (req, res) => {},

  //MESSAGES
  allMessages: (req, res) => {
    Message.find()
      .exec()
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(500).json({ error: err }));
  },
  oneMessage: (req, res) => {
    const id = req.params.id;
    Message.findById(id)
      .exec()
      .then((doc) => res.status(200).json(doc))
      .catch((err) => res.status(500).json({ error: err }));
  },
  newMessage: (req, res) => {
    const message = new Message({
      _id: new mongoose.Types.ObjectId(),
      subject: req.body.subject,
      message: req.body.message,
      name: req.body.name,
      email: req.body.email,
    });

    message
      .save()
      .then((result) => {
        console.log(result);
        res.status(200).json(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  readMessage: (req, res) => {},
  deleteMessage: (req, res) => {},
};
