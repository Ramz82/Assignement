//..................lab _work.............
// const student = class{
// constructor(n){
//     this._name = n;
// }
//     get name(){

//     }
//     // instance func. ko object kay through call kartay hooo
//     // static func. ko class kay through call kartay hoo..
//     //usage of static : kissi paticular objet par depend nahi kar rahi hoti such as name of uni.
// // function ka key word likhnay ki zaroorat nahi hoti
// display(){
//     console.log("i am a student class...")
// }
// static universitytime(){
//     console.log("timings are....")
// }
// } ;
// const CSStudent = class extends student {
//     constructor (n, fyp){
//         this.fyp = fyp;
//         super(n);
//     }
//     display (){
//         console.log("i am a cs student...");

//     }
// };
// //let st1 = new CSStudent("ali", "six semester ");
// let st2 = new student("ali");
// st2.display();
// student.universitytime();
// //use underscore at statrt of variable to show that variable is private 

//.......................lab task .............................//
// activity  1 
round=(...args)=>{ 
    arr=[] 
    args.forEach((element,index)=>{
    arr[index]=Math.round(element); 
    })
    return arr;
    
   }
   console.log(round(1.2, 4.3, 7.7))

   // activity 2:
   floor=(...args)=>{ 
    arr=[] 
    args.forEach((element,index)=>{ 
    arr[index]=Math.floor(element); 
    }) 
    return arr;}
    genericOpertaions=(operation,...args)=>{ 
     if(operation==='round'){ 
     return round(...args); 
     }
     else if(operation==='abs'){ 
     return abs(...args) }
     else if(operation==='ceil'){
     return ceil(...args) }
     else if(operation==='floor'){
     return floor(...args) }
     else{ 
     return "Invalid Operation" 
    }
    }
    console.log(genericOpertaions('floor',1.3,2.4,3.6,4.2,5.5));

    // task 1:
    const person = class{
        constructor (name = "", age = 0, gender = ""){
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
    };
    const student = class extends person {
        constructor (reg_number , semester , name = "", age=0, gender=""){
            this.reg_number = reg_number;
            this.semester = semester;
            super(name, age, gender );
        }

    };
    const employee = class extends person {

    };
    const teacher  = class extends employee{
        constructor(department, designation, salary, name = "", age=0, gender= ""){
            this.department = department;
            this.designation = designation;
            this.salary = salary;
            super(name, age, gender );
        }
    };
    const staff = class extends employee{

    };

    //..........................................................
    //task 1:
    // Person class
    function Person(name = "null", age = 0, gender = "Unknown") {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  
  // Employee class (inherits from Person)
  function Employee(name, age, gender, department = "Unknown", designation = "Unknown", salary = 0) {
    Person.call(this, name, age, gender);
    this.department = department;
    this.designation = designation;
    this.salary = salary;
  }
  
  function Teacher(name, age, gender, department, designation, salary, subject = "Unknown") {
    Employee.call(this, name, age, gender, department, designation, salary);
    this.subject = subject;
  }
  
  function Staff(name, age, gender, department, designation, salary, role = "Unknown") {
    Employee.call(this, name, age, gender, department, designation, salary);
    this.role = role;
  }
  
  function Student(name, age, gender, studentID = "Unknown", courses = []) {
    Person.call(this, name, age, gender);
    this.studentID = studentID;
    this.courses = courses;
  }
  
  function Courses() {
    this.students = [];
    this.teachers = [];
  
    this.addStudent = function (student) {
      this.students.push(student);
    };
  
    this.addTeacher = function (teacher) {
      this.teachers.push(teacher);
    };
  }
  
  const student1 = new Student("ramza", 21, "Female", "S12345", ["OS", "OOSE"]);
  const student2 = new Student("marbia", 22, "Female", "S67890", ["DSA", "ITDS"]);
  
  const teacher1 = new Teacher("sir kamran", 35, "Male", "DSA", "ITDS", 60000, "OS");
  const teacher2 = new Teacher("sir yasir", 35, "male", "OS", "OOSE", 80000, "OOSE");
  
  const staff1 = new Staff("ahmed", 25, "Male", "Administration", "admission fee", 40000, "Afees");
  const staff2 = new Staff("sara", 27, "Female", "fee section", "transport fees", 35000, "transport section");
  
  // Print information for each object
  console.log("Student 1:", student1);
  console.log("Student 2:", student2);
  
  console.log("Teacher 1:", teacher1);
  console.log("Teacher 2:", teacher2);
  
  console.log("Staff 1:", staff1);
  console.log("Staff 2:", staff2);
  

