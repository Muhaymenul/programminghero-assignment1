//problem1: filter even numbers from an array
const numbers:number[]=[1, 2, 3, 4, 5, 6];
//function to filter even numbers
const filterEvenNumbers=(arr:number[]):void=>{
    const evenNum= arr.filter(num=>num%2===0);
    console.log(evenNum);
}
filterEvenNumbers(numbers);

//problem2: reverse a string
const reverseString=(str:string):void=>{
    const revStr= str.split('').reverse().join('');
    console.log(revStr);
}
reverseString("typescript");

//problem3: finding type of parameter/variable
const checkType=(param: string|number)=>{
    if(typeof param==="string"){
        console.log("string");

    }
    else if(typeof param==="number"){
            console.log("number");
        }
    else{
        console.log("another type");
    } 
}
checkType(40);    
checkType("Hello");

//problem4: generic function getProperty that takes an object and a key, then returns the value of that key
const getProperty=<T, K extends keyof T>(obj:T,key:K):T[K]=>{
    console.log(obj[key]);
    return obj[key];
}
const user={ id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");
//problem5:Define an interface Book with properties title, author, and publishedYear. Create a function toggleReadStatus that accepts a Book object and returns a new object with an added isRead property (boolean), defaulting to 
interface Book{
    title:string;
    author:string;
    publishedYear:number;
    isRead?:boolean;
}
//toggle read status, defaulting to false
const toggleReadStatus = (book: Book): void => {
    const readT= { ...book, isRead: true };
} 
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
toggleReadStatus(myBook);

//problem6:Create a class Person with a name and age. Then, create a subclass Student that adds a grade property. Include a method getDetails in the Student class that returns a string with the student's name, age, and grade.
//inheritance
class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
}
class Student extends Person {
    grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }
    getDetails(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}
const student = new Student("Alice", 20, "A");
student.getDetails();

//problem7:Create a function getIntersection that takes two arrays of numbers and returns a new array containing only the elements that are present in both arrays.
const getIntersection=(arr1:number[],arr2:number[]):void=>{
    const interscets= arr1.filter(num=>arr2.includes(num));
    console.log(interscets);
}
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
