let winningBalance = calculateBalance (245, 169);


function calculateBalance (victories , defeats) {
    let calculate = victories - defeats;
    return calculate
}

if (winningBalance < 10){
    console.log(`O Jogador tem saldo de ${winningBalance} vitórias e está no nível Ferro!`)

}else if (winningBalance > 10 && winningBalance < 21){
    console.log(`O Jogador tem saldo de ${winningBalance} vitórias e está no nível Bronze!`)

}else if (winningBalance > 20 && winningBalance < 51){
    console.log(`O Jogador tem saldo de ${winningBalance} vitórias e está no nível Prata!`)
    
}else if (winningBalance > 50 && winningBalance < 81){
    console.log(`O Jogador tem saldo de ${winningBalance} vitórias e está no nível Ouro!`)
    
}else if (winningBalance > 80 && winningBalance < 91){
    console.log(`O Jogador tem saldo de ${winningBalance} vitórias e está no nível Diamante!`)
    
}else if (winningBalance > 90 && winningBalance < 101){
    console.log(`O Jogador tem saldo de ${winningBalance} vitórias e está no nível Lendário!`)
    
}else{
    console.log(`O Jogador tem saldo de ${winningBalance} vitórias e está no nível Imortal!`)
    
}


// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"