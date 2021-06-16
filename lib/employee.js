// The first class is an Employee parent class with the following properties and methods:

// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole()—returns 'Employee'

function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}

Employee.prototype.getName = function() {
    return this.name;
};
Employee.prototype.getID = function() {
    return this.id;
};
Employee.prototype.getEmail = function() {
    return this.email;
};
Employee.prototype.getRoll = function() {
    return this.roll;
};


module.exports = Employee;