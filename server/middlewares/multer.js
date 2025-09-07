import multr from "multer";

//creating multer middlerware for passing form data

const storage = multr.diskStorage({
  filename: function (req, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multr({
  storage,
});


export default upload