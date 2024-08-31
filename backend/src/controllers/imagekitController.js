const imagekit = require("../config/imagekitConfig");
const path = require("path");

const uploadImage = async (req, res) => {
  let dataFile;

  if (req.file) {
    const strFile = req.file.buffer.toString("base64");

    // First, upload without specifying the fileName
    dataFile = await imagekit.upload({
      file: strFile,
      fileName: path.basename(req.file.originalname), // Use the original file name initially
    });

    if (dataFile && dataFile.fileId) {
      const newFileName = `${dataFile.fileId}_${path.basename(
        req.file.originalname
      )}`;

      // Rename the file using a callback function
      imagekit.renameFile(
        {
          newFileName: newFileName,
          filePath: dataFile.filePath,
          purgeCache: false,
        },
        async (error, response) => {
          if (error) {
            res.status(500).json({
              success: false,
              message: "Failed to rename file",
              error,
            });
            return;
          }

          try {
            const updatedFileDetails = await imagekit.getFileDetails(
              dataFile.fileId
            );
            const clearUrl = updatedFileDetails.url.split("?")[0]; // Remove the query string

            res.json({
              success: true,
              data: clearUrl, // Return the new URL after renaming
            });
          } catch (error) {
            res.status(500).json({
              success: false,
              message: "Failed to fetch updated file details",
              error: error,
            });
          }
        }
      );
    } else {
      res.status(400);
      throw new Error("Invalid file");
    }
  }
};

deleteImage = async (req, res) => {
  const { fileId } = req.params;

  imagekit.deleteFile(fileId, (error, result) => {
    if (error) {
      res.status(500).json({
        success: false,
        message: "Failed to delete file",
        err: error.message,
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "File deleted successfully",
      err: null,
      data: null,
    });
  });
};

module.exports = {
  uploadImage,
  deleteImage,
};
