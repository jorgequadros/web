// Criar um array para representar o tabuleiro
var tabuleiro = ["", "", "", "", "", "", "", "", ""];

// Criar uma variável para armazenar o turno do jogador
var turno = "X";

// Criar uma função para desenhar o tabuleiro na tela
function desenharTabuleiro() {
  // Limpar a tela
  console.clear();
  // Mostrar o tabuleiro em formato de grade
  console.log(tabuleiro[0] + "|" + tabuleiro[1] + "|" + tabuleiro[2]);
  console.log("-+-+-");
  console.log(tabuleiro[3] + "|" + tabuleiro[4] + "|" + tabuleiro[5]);
  console.log("-+-+-");
  console.log(tabuleiro[6] + "|" + tabuleiro[7] + "|" + tabuleiro[8]);
}

// Criar uma função para verificar se o jogo terminou
function verificarFimDeJogo() {
  // Criar um array para armazenar as possíveis combinações vencedoras
  var vencedoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // Percorrer o array de combinações vencedoras
  for (var i = 0; i < vencedoras.length; i++) {
    // Obter os índices da combinação atual
    var a = vencedoras[i][0];
    var b = vencedoras[i][1];
    var c = vencedoras[i][2];
    // Verificar se os valores do tabuleiro nessas posições são iguais e não vazios
    if (
      tabuleiro[a] != "" &&
      tabuleiro[a] == tabuleiro[b] &&
      tabuleiro[a] == tabuleiro[c]
    ) {
      // Retornar o valor do vencedor
      return tabuleiro[a];
    }
  }
  // Verificar se o tabuleiro está cheio
  if (tabuleiro.indexOf("") == -1) {
    // Retornar um empate
    return "E";
  }
  // Retornar falso se o jogo não terminou
  return false;
}

// Criar uma função para jogar
function jogar() {
  // Desenhar o tabuleiro
  desenharTabuleiro();
  // Verificar se o jogo terminou
  var fim = verificarFimDeJogo();
  // Se o jogo terminou
  if (fim) {
    // Mostrar o resultado
    if (fim == "X") {
      console.log("O jogador X venceu!");
    } else if (fim == "O") {
      console.log("O jogador O venceu!");
    } else {
      console.log("O jogo terminou em empate!");
    }
    // Encerrar o jogo
    return;
  }
  // Pedir ao jogador para escolher uma posição
  var posicao = prompt("Jogador " + turno + ", escolha uma posição de 1 a 9:");
  // Converter a posição para um número
  posicao = Number(posicao);
  // Verificar se a posição é válida
  if (posicao >= 1 && posicao <= 9) {
    // Converter a posição para um índice do array
    var indice = posicao - 1;
    // Verificar se a posição está vazia
    if (tabuleiro[indice] == "") {
      // Preencher a posição com o turno do jogador
      tabuleiro[indice] = turno;
      // Alternar o turno do jogador
      if (turno == "X") {
        turno = "O";
      } else {
        turno = "X";
      }
    } else {
      // Mostrar uma mensagem de erro
      console.log("Essa posição já está ocupada!");
    }
  } else {
    // Mostrar uma mensagem de erro
    console.log("Essa posição é inválida!");
  }
  // Jogar novamente
  jogar();
}

// Iniciar o jogo
jogar();