function revelar() {

  // 1. Altera o src da imagem principal para o arquivo do jogador
  var foto = document.getElementById("foto-jogador");
  foto.src = "_vinicius_junior.png";
  foto.alt = "Vinícius Júnior";

  // 2. Substitui o conteúdo dos <span> pelas informações do jogador
  document.getElementById("nome").textContent      = "Vinícius José Paixão de Oliveira Júnior";
  document.getElementById("nascimento").textContent = "12/07/2000 (25 anos)";
  document.getElementById("altura").textContent    = "1,76 m";
  document.getElementById("posicao").textContent   = "Ponta-esquerda / Atacante";
  document.getElementById("rank").textContent      = "9,5";

  // 3. Remove a classe placeholder-text de todos os <span> afetados
  // 4. Aplica a classe card-text para finalizar a estilização
  var spans = ["nome", "nascimento", "altura", "posicao", "rank"];

  spans.forEach(function(id) {
    var elemento = document.getElementById(id);
    elemento.classList.remove("placeholder-text");
    elemento.classList.add("card-text");
  });

}
