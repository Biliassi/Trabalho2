class HistoricoNavegacao {
    constructor() {
      this.pilha = [];
    }
  
    empilhar(endereco) {
      this.pilha.push(endereco);
      this.atualizarHistorico();
    }
  
    desempilhar() {
      if (this.pilha.length > 1) {
        this.pilha.pop();
        this.atualizarHistorico();
        return this.pilha[this.pilha.length - 1];
      } else {
        return null;
      }
    }
  
    atualizarHistorico() {
      const historicoElemento = document.getElementById("historicoNavegacao");
      historicoElemento.innerHTML = this.pilha.map((endereco, index) => `<p>${index + 1}. ${endereco}</p>`).join('');
    }
  }
  
  const historico = new HistoricoNavegacao();
  
  function navegar() {
    const endereco = prompt("Digite o endereço:");
    if (endereco) {
      historico.empilhar(endereco);
    }
  }
  
  function voltar() {
    const enderecoAnterior = historico.desempilhar();
    if (enderecoAnterior !== null) {
      alert(`Voltando para: ${enderecoAnterior}`);
    } else {
      alert("Histórico vazio ou não é possível voltar mais.");
    }
  }