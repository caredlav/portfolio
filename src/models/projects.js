const path = require('path');
const fs = require('fs');
const projects = JSON.parse(fs.readFileSync(path.resolve(__dirname, './projects.json')), 'utf-8');

const projectsModel = {
    findAll: () => {
        return projects;
    }
}

module.exports = projectsModel;