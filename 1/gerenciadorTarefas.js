class GerenciadorTarefas {
    constructor() {
      this.tarefas = [];
    }
  
    adicionarTarefa(tarefa) {
      this.tarefas.push(tarefa);
      this.atualizarLista();
    }
  
    removerTarefa(index) {
      if (index >= 0 && index < this.tarefas.length) {
        this.tarefas.splice(index, 1);
        this.atualizarLista();
      }
    }
  
    realizarTodasTarefas() {
      this.tarefas.forEach(tarefa => {
        console.log(`Tarefa realizada: ${tarefa}`);
      });
    }
  
    atualizarLista() {
      const listaTarefasElemento = document.getElementById("listaTarefas");
      listaTarefasElemento.innerHTML = this.tarefas.map(tarefa => `<li>${tarefa} <button onclick="gerenciador.removerTarefa(${this.tarefas.indexOf(tarefa)})">Remover</button></li>`).join('');
    }
  }
  
  const gerenciador = new GerenciadorTarefas();