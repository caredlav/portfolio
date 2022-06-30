const carouselImagesModel=require('../models/carouselImagesMaterialize');
const projectsModel=require('../models/projects');
const hobbiesModel=require('../models/hobbies');

const homeController={
    getHome: (req,res)=>{
        const listOfImgs=carouselImagesModel.findAll();
        res.render('home',{title: "Home", images: listOfImgs, code: 1});
    },
    getWorks: (req,res)=>{   
        const listOfProjects=projectsModel.findAll();
        res.render('works',{title: "Works", works: listOfProjects});
    },
    getAbout: (req,res)=>{
        const listOfHobbies=hobbiesModel.findAll();
        res.render('about',{title: "About Me", hobbies: listOfHobbies, code: 2});
    },
    getContact: (req,res)=>{
        res.render('contact',{title: "Contact Information"});
    }
}

module.exports=homeController;