document.getElementById("totalTip").style.display = "none";

document.getElementById("tipsForm").addEventListener("submit", calculaGrojeta);

function calculaGrojeta(event) {
  event.preventDefault(); //A funcao preventDefault altera o comportamento padrão do evento, que nesse caso é um submit de formulario, sem essa função o resultado da calculadora seria exibido de forma bem rápida uma vez que assim que enviado o formulário a página recarregaria automaticamente.Com esse método a página não mais será recarregada automaticamente.

  let valorConta = document.getElementById("vlrConta").value;
  let qualService = document.getElementById("qualidadeServico").value;
  let qtdPessoas = document.getElementById("pessoasConta").value;
  let gorgetaTotal = (valorConta * qualService) / 1;
  let totalPorPessoa = (valorConta * qualService) / qtdPessoas;

  if (valorConta == "" && qualService == 0) {
    alert(
      "Porfavor, preencha os campos valor da conta e qualidade do serviço "
    );
    return;
  } else if (valorConta == "") {
    alert("Porfavor, preencha o campo valor da conta");
    return;
  } else if (qualService == 0) {
    alert("Porfavor, preencha o campo qualidade do serviço");
    return;
  } else {
    exibeTotal();
  }

  if (qtdPessoas == "" || qtdPessoas <= 1) {
    qtdPessoas = 1;
    document.getElementById("cadaPessoa").style.display = "none";
    document.getElementById("totalPorPessoa").style.display = "none";
    exibeTotalSePessoaNulo(qtdPessoas);
  }

  function exibeTotal() {
    gorgetaTotal = gorgetaTotal.toFixed(2);
    totalPorPessoa = totalPorPessoa.toFixed(2);
    document.getElementById("tip").innerHTML = gorgetaTotal;
    document.getElementById("totalPorPessoa").innerHTML = totalPorPessoa;
    document.getElementById("totalTip").style.display = "block";
  }

  function exibeTotalSePessoaNulo(qtPessoa) {
    let total1 = (valorConta * qualService) / qtPessoa;
    document.getElementById("tip").innerHTML = total1.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
  }
}
