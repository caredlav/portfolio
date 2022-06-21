const express = require("express");
const app = express();
const port = process.env.PORT || 9889;
const homeRouter=require("./routers/home.routes");
const path=require('path');

app.use(express.static("public"));
app.set('view engine','ejs');
app.set("views",path.resolve(__dirname,"./views"));

app.use(homeRouter);

app.use((req,res,next)=>{
    res.status(404).render('error');
})

app.listen(port, ()=>console.log(`Sever status: ON on port ${port}`));