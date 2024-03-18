class Rantangle {
    x: number;
    y: number;
}

class Calculation extends Rantangle {
    area() {
        console.log("calculation is : " + this.x * this.y);
    }
}
const obj = new Calculation();

obj.x = 12;
obj.y = 12;
obj.area();

//class/ constructor / 
class Person {
    ssn: number;
    firstname: string;
    lastname: string;

    constructor(ssn: number, firstname: string, lastname: string) {
        this.ssn = ssn;
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getFullName(): string {
        return `${this.firstname} ${this.lastname}`;
    }
}

let person1 = new Person(23, 'nazmus', 'sakib');
console.log(person1.getFullName());

//static method: 
class Employee {
    static headcount: number = 0;

    constructor(private fname: string, private lname: string, private jobtitle: string) {
        Employee.headcount++;
    }
}
let sakib = new Employee('nazmus', 'sakib', 'backend developer');
let akib = new Employee('akib', 'hasan', 'front-end developer');
let rakib = new Employee('nazmus', 'rakib', 'fullstack developer');

console.log(Employee.headcount);

//abstruct class:

abstract class employee {
    constructor(private fstname, private lstname) {

    }
    abstract getsalary(): number
    get fullname(): string {
        return `${this.fstname} ${this.lstname}`;
    }
    compensationStatement(): string {
        return `${this.fullname} makes ${this.getsalary()} a month.`;
    }
}
class FullTimeEmployee extends employee {
    constructor(fstname: string, lstname: string, private salary: number) {
        super(fstname, lstname);
    }
    getsalary(): number {
        return this.salary;
    }
}
let obj2 = new FullTimeEmployee('taskin', 'ahmed', 40000);
console.log(obj2.compensationStatement());