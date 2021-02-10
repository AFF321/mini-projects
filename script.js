var wins = 0
var loses = 0
var tie = 0

var choice = prompt("Your Choices");

var pc = ["R", "P", "S"]

var randomIndex = Math.floor (Math.random() *3)

console.log (pc[randomIndex])

var pcChoice = pc [randomIndex]

if (choice == pcChoice) {
    tie ++
    alert("youre tie");
}

else if (choice === "R" && pcChoice === "P"){
    loses ++
    alert("you lose")
} 

else if (choice === "R" && pcChoice === "S"){
    wins ++
    alert("you win")
} 

else if (choice === "S" && pcChoice === "R"){
    loses ++
    alert("you lose")
} 

else if (choice === "S" && pcChoice === "P"){
    wins ++
    alert("you win")
} 
else if (choice === "P" && pcChoice === "S"){
    loses ++
    alert("you lose")
} 

else if (choice === "P" && pcChoice === "R"){
    wins ++
    alert("you win")
} 

alert("wins " + wins +" Loses "  +loses+ " Ties " + tie)