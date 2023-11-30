class Nodo {
    constructor(nome, url) {
      this.nome = nome;
      this.url = url;
      this.filhos = [];
    }
  
    adicionarFilho(filho) {
      this.filhos.push(filho);
    }
  
    exibir() {
      let html = `<p>${this.nome}</p>`;
  
      if (this.filhos.length > 0) {
        html += '<ul>';
        this.filhos.forEach(filho => {
          html += `<li>${filho.exibir()}</li>`;
        });
        html += '</ul>';
      }
  
      return html;
    }
  }
  
  const menuPrincipal = new Nodo("Home", "/home");
  
  const menuSobreNos = new Nodo("Sobre Nós", "/sobre-nos");
  menuSobreNos.adicionarFilho(new Nodo("Equipe", "/equipe"));
  menuSobreNos.adicionarFilho(new Nodo("Missão e Visão", "/missao-visao"));
  
  const menuContato = new Nodo("Contato", "/contato");
  
  menuPrincipal.adicionarFilho(menuSobreNos);
  menuPrincipal.adicionarFilho(menuContato);
  
  document.getElementById("menu").innerHTML = menuPrincipal.exibir();