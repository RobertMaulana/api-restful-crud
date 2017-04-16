const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const methodOveride = require("method-override");
const cors = require("cors")

const index = require("./routes/index");
const memo = require("./routes/memo");

app.use(cors())
app.use(methodOveride("_method"));
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", index);
app.use("/memo", memo);

app.listen(3000, () => {
  console.log(`Server listened!`);
})
