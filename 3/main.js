class FilaDeImpressao {
    constructor() {
      this.fila = [];
    }
  
    adicionarArquivo(arquivo) {
      this.fila.push(arquivo);
      atualizarEstadoFila();
    }
  
    imprimir() {
      if (this.fila.length > 0) {
        const arquivoAtual = this.fila.shift();
        atualizarEstadoFila();
        return arquivoAtual;
      } else {
        return null;
      }
    }
  
    obterEstadoFila() {
      return this.fila.slice(); // Retorna uma cópia da fila para evitar modificações indesejadas
    }
  }
  
  const filaDeImpressao = new FilaDeImpressao();
  
  function atualizarEstadoFila() {
    const estadoFila = filaDeImpressao.obterEstadoFila();
    const estadoFilaElemento = document.getElementById("estadoFila");
    estadoFilaElemento.innerHTML = `<p>Fila de Impressão:</p>${estadoFila.map((arquivo, index) => `<p>${index + 1}. ${arquivo}</p>`).join('')}`;
  }