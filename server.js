const express = require("express");
const app = express();
const multer  = require('multer')
const cors = require('cors');

// setup multer for file upload
const storage = multer.diskStorage(
    {
        destination: './src/assets/blueprints',
        filename: function (req, file, cb ) {
            cb( null, file.originalname);
        }
    }
);

const upload = multer({ storage: storage } )

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.use(express.static(__dirname + "/../build"));

// route for file upload
app.post("/api/uploadfile", upload.single('myFile'), (req, res, next) => {
    console.log(req.file.originalname + " file successfully uploaded !!");
    res.sendStatus(200);
});

app.listen(3001, () => console.log("Listening on port 3001"));
