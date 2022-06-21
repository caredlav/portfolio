const path =require("path");
const carouselImagesModel=require('../models/carouselImages');
const projectsModel=require('../models/projects');

const homeController={
    getHome: (req,res)=>{
        const listOfImgs=carouselImagesModel.findAll();
        res.render('home',{images: listOfImgs});
    },
    getWorks: (req,res)=>{   
        const listOfProjects=projectsModel.findAll();
        res.render('works',{title: "Works", works: listOfProjects});
    },
    getAbout: (req,res)=>{
        res.render('about',{title: "About Me"});
    },
    getContact: (req,res)=>{
        res.render('contact',{title: "Contact Information"});
    }
}

module.exports=homeController;