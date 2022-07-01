const path = require('path');
const fs = require('fs');
const imgs = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./carouselImgsMaterialize.json"), 'utf-8'));

const carouselImagesModel = {
    findAll: () => {
        return imgs;
    }
}

module.exports = carouselImagesModel;