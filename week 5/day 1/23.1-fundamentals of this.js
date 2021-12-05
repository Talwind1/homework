//question 1
console.log(this);

// this is reference to window object.

//question 2
const myObj = {
  name: "Timmy",
  greet: () => {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();

// when envoking greet, 'this' reference to window object, and returns
// name property of window, if exist.
// for fixing it, it better to use 'myObj.name' and get the myObj.name.

//question 3
const myFuncDec = function () {
  console.log(this);
};

//this now points to nothing, because this is relevant only
//when envoking a function, and here is just a decleration.

//Question 4

const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();

//arrow function reference 'this' to window object.

//Question 5:
//a. In your own words what will this point to and why.
//b. How can you fix this code.
document.querySelector(".element").addEventListener(() => {
  console.log(this);
});

//this reference to the document.
//addEventListener execute the function with the target element-
//which is element. So, element is a property inside document, so this references to document.
