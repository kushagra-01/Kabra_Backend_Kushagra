const path = require("path");

const multer = require("multer");


const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null,path.join(__dirname,"../uploadss"));
  },
  filename: function (req, file, callback) {
    callback(null, `${file.originalname}`);
  },
});



function fileFilter(req, file, callback) {
  
  if (file.mimetype == "image/jpeg" || file.mimetype =="image/png") {
    callback("",true)
  } else {
    
    callback(null, false);
  }
}

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
});

const uploadSingle = (fileKey) => {
  return function (req, res, next) {
    const uploadItem = upload.single(fileKey);


    uploadItem(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(500).send(err.message);
      } else if (err) {
        return res.status(500).send(err.message);
      }
   
      next();
    });
  };
};



module.exports = { upload, uploadSingle};
