'use strict';
var dbConn = require('./../../config/db.config');

var Employee = function(employee) {
    this.ID = employee.ID; 
    this.EmpID = employee.EmpID;
    this.FirstName = employee.FirstName;
    this.LastName = employee.LastName; 
    this.DesignationID = employee.DesignationID;
    this.designation = employee.designation;
    this.JoiningDate = new Date(employee.JoiningDate);
    this.Username = employee.Username;
    this.UserPassword = employee.UserPassword;
    this.IsActive = employee.IsActive;
    this.LeavingDate = new Date(employee.LeavingDate);
    this.EmpAddress = employee.EmpAddress;
    this.ContactNumber = employee.ContactNumber;
    this.EmpImage = employee.EmpImage;
    this.IsAdmin = employee.IsAdmin;
};

Employee.create = function (newEmp, result) {
    dbConn.query("INSERT INTO mstremployee set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Employee.findById = function (id, result) {
    dbConn.query("SELECT * FROM mstremployee WHERE ID = ?", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res[0]);
        }
    });
};

Employee.findAll = function (result) {
    dbConn.query("SELECT  ID, EmpID, FirstName, LastName, DesignationID, JoiningDate, Username, UserPassword, IsActive, LeavingDate, EmpAddress, ContactNumber, EmpImage, IsAdmin FROM mstremployee;", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('mstremployee : ', res);
            result(null, res);
        }
    });
};

Employee.update = function (id, employee, result) {
    dbConn.query("UPDATE mstremployee SET EmpID = ?, FirstName = ?, LastName = ?, DesignationID = ?, JoiningDate = ?, Username = ?, UserPassword = ?, IsActive = ?, LeavingDate = ?, EmpAddress = ?, ContactNumber = ?, EmpImage = ?, IsAdmin = ? WHERE ID = ?",
    [employee.EmpID, employee.FirstName, employee.LastName, employee.DesignationID, new Date(employee.JoiningDate), employee.Username, employee.UserPassword, employee.IsActive, new Date(employee.LeavingDate), employee.EmpAddress, employee.ContactNumber, employee.EmpImage, employee.IsAdmin, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Employee.delete = function (id, result) {
    dbConn.query("DELETE FROM mstremployee WHERE ID = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports= Employee;