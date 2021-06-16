// In addition to Employee's properties and methods, Engineer will also have the following:

// github—GitHub username

// getGithub()

// getRole()—overridden to return 'Engineer'

const Employee = require ('./employee');

function Engineer(name, id, email, github) {
    Employee.call(this, name, id, email)
    this.github = github;
}
Employee.prototype.getName = function() {
    return this.name;
};

module.exports = Engineer;