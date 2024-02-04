const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();


app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(express.static("public"));


const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`booking app listening on port ${PORT}`);
});