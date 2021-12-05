//console.log(this);

// const myObj = {
//   name: "Timmy",
//   greet: () => {
//     console.log(`Hello ${this.name}`);
//   },
// };
// myObj.greet();

//ques3
// const myFuncDec = function () {
//   console.log(this);
// };

//ques4
// const myFuncArrow = () => {
//   console.log(this);
// };
// myFuncArrow();

//ques5
document.querySelector(".element").addEventListener(() => {
  console.log(this);
});
