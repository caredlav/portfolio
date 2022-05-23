const path =require("path");

const homeController={
    getHome: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/home.html"));
    },
    getWorks: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/works.html"));
    },
    getAbout: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/about.html"));
    },
    getContact: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/contact.html"));
    }
}

module.exports=homeController;