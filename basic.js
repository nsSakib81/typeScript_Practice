var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rantangle = /** @class */ (function () {
    function Rantangle() {
    }
    return Rantangle;
}());
var Calculation = /** @class */ (function (_super) {
    __extends(Calculation, _super);
    function Calculation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Calculation.prototype.area = function () {
        console.log("calculation is : " + this.x * this.y);
    };
    return Calculation;
}(Rantangle));
var obj = new Calculation();
obj.x = 12;
obj.y = 12;
obj.area();
//class/ constructor / 
var Person = /** @class */ (function () {
    function Person(ssn, firstname, lastname) {
        this.ssn = ssn;
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstname, " ").concat(this.lastname);
    };
    return Person;
}());
var person1 = new Person(23, 'nazmus', 'sakib');
console.log(person1.getFullName());
//static method: 
var Employee = /** @class */ (function () {
    function Employee(fname, lname, jobtitle) {
        this.fname = fname;
        this.lname = lname;
        this.jobtitle = jobtitle;
        Employee.headcount++;
    }
    Employee.headcount = 0;
    return Employee;
}());
var sakib = new Employee('nazmus', 'sakib', 'backend developer');
var akib = new Employee('akib', 'hasan', 'front-end developer');
var rakib = new Employee('nazmus', 'rakib', 'fullstack developer');
console.log(Employee.headcount);
//abstruct class:
var employee = /** @class */ (function () {
    function employee(fstname, lstname) {
        this.fstname = fstname;
        this.lstname = lstname;
    }
    Object.defineProperty(employee.prototype, "fullname", {
        get: function () {
            return "".concat(this.fstname, " ").concat(this.lstname);
        },
        enumerable: false,
        configurable: true
    });
    employee.prototype.compensationStatement = function () {
        return "".concat(this.fullname, " makes ").concat(this.getsalary(), " a month.");
    };
    return employee;
}());
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(fstname, lstname, salary) {
        var _this = _super.call(this, fstname, lstname) || this;
        _this.salary = salary;
        return _this;
    }
    FullTimeEmployee.prototype.getsalary = function () {
        return this.salary;
    };
    return FullTimeEmployee;
}(employee));
var obj2 = new FullTimeEmployee('taskin', 'ahmed', 40000);
console.log(obj2.compensationStatement());
