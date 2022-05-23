const express = require("express");
const app = express();
const port = process.env.PORT || 9889;
const homeRouter=require("./routers/home.routes");

app.use(express.static("public"));

app.use(homeRouter);

app.listen(port, ()=>console.log(`Sever status: ON on port ${port}`));