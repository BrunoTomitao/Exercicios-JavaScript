const idade = 25;
const possuiCarteiraDeMotorista = true;
const podeDirigir = idade >= 18 && possuiCarteiraDeMotorista;
console.log(podeDirigir);

const estaChovendo = true;
const estaVentando = false;
const condicoesAtendidas = estaChovendo || estaVentando;
console.log(condicoesAtendidas);

const usuarioLogado = false;
const usuarioNaoLogado = !usuarioLogado;
console.log(usuarioNaoLogado);
