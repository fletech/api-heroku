let express = require("express");
const path = require("path");
// let multer = require("multer");
// let mime = require("mime");

let router = express.Router();
let apiPortfolioController = require("../controllers/api_portfolioController");

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "../public/images/uploads"));
//   },
//   filename: function (req, file, cb) {
//     console.log(file);
//     cb(null, file.originalname + "." + mime.getExtension(file.mimetype));
//   },
// });
// var upload = multer({ storage: storage });

/* BLOG */
router.get("/posts", apiPortfolioController.allBlogPosts);
router.get("/post/:id", apiPortfolioController.oneBlogPosts);
router.post("/new-post", apiPortfolioController.newBlogPost);
router.patch("/post/:id", apiPortfolioController.editBlogPost);
router.delete("/post/:id", apiPortfolioController.deleteBlogPost);

/*CONTACT*/
router.get("/messages", apiPortfolioController.allMessages);
router.get("/messages/:id", apiPortfolioController.oneMessage);
router.post("/new-message", apiPortfolioController.newMessage);
router.patch("/messages/:id", apiPortfolioController.readMessage);
router.delete("/messages/:id", apiPortfolioController.deleteMessage);

/*USERS*/

router.post("/api/users", apiPortfolioController.loginAlkemy);
module.exports = router;
