var idade = 17; 
var possuiCNH = false; 

if (idade > 18 && !possuiCNH) {
  console.log("Você tem mais de 18 anos, mas não possui CNH. Não pode dirigir.");
} else if (idade > 18 && possuiCNH) {
  console.log("Você tem mais de 18 anos e possui CNH. Pode dirigir.");
} else if (idade < 18 && !possuiCNH) {
  console.log("Você não tem 18 anos e não tem CNH.");
}  
