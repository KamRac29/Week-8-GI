
// Easy
function exercise(name){
    let exOfTheDay = "Today's exercise: " + name;
    return exOfTheDay; 
}
// Made a function called exercise() then concatenated name to create a string  called exoftheday .
console.log(exercise("Jogging"));



// Medium
function sharePizza(slices, people){
    let slicesPerPerson = slices / people;
    let funcText = `Each person gets ${slicesPerPerson} slices of pizza; from our ${slices} slice pizza`;
    return funcText;
}
console.log(sharePizza(10, 2));
// create a function called sharePizza() then add a variable that will calculate the slices per person. 
// added another variable that uses interpolation .




// Hard 
class PII{
    #name;
    #ssn;
    constructor(name, ssn) {
        this.#name = name;
        this.#ssn = ssn;
    }
    
    getName(){
        return this.#name;  
    }
    
    getSSN(){
        return `xxx-xx-${this.#ssn.substring(7)}`;
    }
}

const patient = new PII("Susie", "154-56-2341");

console.log(patient.getName());
console.log(patient.getSSN());
console.log(patient.name);
console.log(patient.ssn);

// I create a class called PII that included two properties name and ssn . I then created a contructor with a parameter
// of name and ssn . I put hashtag in constructor to make the name and ssn not accessible(to be able to access the information directly)
// I then made a method called getName() and getSSN(). I added a substring to the getSSN method to only output that last four of the social 
// to protect the patients privacy.

// Very Hard
class Person{
    constructor(name, job, age){
        this.name = name;
        this.job = job;
        this.age = age;
    }
    exercise(){
        return "Volleyball is cool";
    }

    fetchJob(){
        return `${this.name} is a ${this.job}`;
    }
}

const me = new Person("Kamara", "Software Developer", 25);
console.log(me.fetchJob());

class Programmer extends Person{
    #languages;
    #busy = true;
    constructor(name, job, age, languages){
        super(name, job, age);
        this.#languages = languages;
    }
    completeTask(){
         this.#busy = false;
    }
    acceptNewTask(){
        this.#busy = true;
    }
    offerNewTask(){
        if(this.#busy == true){
            return `${this.name} can't accept any new tasks right now `;

        }else{
            return `${this.name} would love to take on a new responsibility`;
        }
    }
    learnLanguage(newLanguage){
        this.#languages.push(newLanguage);
    }
    listLanguage(){
        return this.#languages;
    }
}
const meToo = new Programmer("Kamara", "Software Developer", 25,["java", "javascript", "python"]);
meToo.completeTask();
console.log(meToo.offerNewTask());
meToo.acceptNewTask();
console.log(meToo.offerNewTask());

const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS”, ”Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31,["HTML", "CSS", "JS", "R"]);
c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");
console.log(c1.listLanguage());
console.log(c2.listLanguage());
console.log(c3.listLanguage());
console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);
console.log(person1.exercise());
console.log (person1.fetchJob());

// I created a class called Person. I added a constructor with the parameter of name, job and age.
//  I then added the exercise() method with a return of a string . I then added another method called fetchJob() with a return string interpolation.
//  I then had to another constructor that extended the class Person .
//  So i created another class called Programmer and extended the class Person. I added two properties on it.
//  I then created a two methods to indicate weather a person has completed a task , can acceptNewTask or offerNewTask. 
//  I created a if else statement for the  method offerNewTask to indicated if the person could or could not accept a new task. 