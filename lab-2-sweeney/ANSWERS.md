*Explain how hoisting allows the printGreeting function to be called before where it's actually written in the file.*

printGreeting();

function printGreeting() {
  console.log("isn't JavaScript wonderful?");
}


*Explain why this function called printGoodbye can't be executed until after it's actually written in the file.*

printGoodbye(); // this one won't execute!

const printGreeting = () => {
  console.log("That's all, folks!");
}

printGoodbye();