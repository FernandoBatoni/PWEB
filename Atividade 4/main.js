
const verifyChoice = (choice) => {
    if (choice !== 'pedra' && choice !== 'papel' && choice !== 'tesoura') {
        alert("Escolha invalida (tem que ser tudo minusculo)")
        choice = prompt("Digite uma escolha valida")
        verifyChoice(choice)
    }
}

const computerChoice = () => {
    const number = Math.random()*100
    if(number < 33) {
        return 'papel'
    } else if(number > 66) {
        return 'tesoura'
    } else {
        return 'pedra'
    }
}

const result = (choice, environmentChoice) => {
    if(choice === environmentChoice) {
        alert("Empate")
    } else if(choice === 'tesoura' && environmentChoice === 'papel') {
        alert("Ganhou")
    } else if(choice === 'pedra' && environmentChoice === 'tesousa') {
        alert("Ganhou")
    } else if(choice === 'papel' && environmentChoice === 'pedra') {
        alert("Ganhou")
    } else if(choice === 'papel' && environmentChoice === 'tesoura') {
        alert("Perdeu")
    } else if(choice === 'tesoura' && environmentChoice === 'pedra') {
        alert("Perdeu")
    } else if(choice === 'pedra' && environmentChoice === 'papel') {
        alert("Perdeu")
    } 
}

const choice = prompt("JOKENPO! (Digite apenas com letras minusculas)")
verifyChoice(choice)
const environmentChoice = computerChoice()
alert("Você mostrou " + choice)
alert("Computador mostrou " + environmentChoice)
result(choice, environmentChoice)