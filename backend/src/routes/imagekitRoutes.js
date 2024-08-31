const express = require("express");
const { uploadImage } = require("../controllers/imagekitController");
const router = express.Router();
const multer = require("multer");
const upload = multer();

router.post("/media", upload.single("image"), uploadImage);
router.delete("/media/:fileId", deleteImage);

module.exports = router;
