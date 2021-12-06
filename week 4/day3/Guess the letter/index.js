const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

  console.log(getRandomLetter());
  function getRandomLetter(){
    let valChar = Math.floor(Math.random() * letters.length);
    let winnerLetter = letters[valChar];
      return winnerLetter;
  }

  console.log(getRandomLetter());
  
  
  let message = document.getElementsByClassName('message');
  
  
  let guess = window.addEventListener(keypress, function (e) {
      if(!e.key.isChar()){
        notChar();
      }
  
  
    //   if (/*not a char*/) {
    //     this.alert("nope, ")
    //   } 
    //   else { //if it is a char 
  
    //     if ((guess !== letter)) {
    //       if (Array wrong include guess){
  
    //       }
    //       else{add guess to Array}
  
    //     }
    //   }
    // });
  
  // function isChar(char){
  //   return (char >= 'a' && char <='z')||(char >= 'A' && char <='Z')
  // }
  
  // function notChar(){
  //   message.innerText ="please enter a valid letter"
  // }