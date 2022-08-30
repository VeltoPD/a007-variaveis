const nome = null

let idade 

console.log(typeof nome)

console.log(typeof idade)

/* Tipo de nome imprimido como object. 

Tipo de idade imprimido como undefined. indefinida por que 
não lhe foi atribuída nenhum valor ainda.*/

const nomePrompt = prompt("Qual é o seu nome? ")
console.log(nomePrompt)

let idadePrompt = prompt("Qual é sua idade?")
console.log(idadePrompt)

console.log(typeof(prompt))
console.log(typeof(idadePrompt))

 //Futuramente eu saberei a resposta

 console.log ("Olá", (nomePrompt), " você tem ", (idadePrompt)," anos de idade!")