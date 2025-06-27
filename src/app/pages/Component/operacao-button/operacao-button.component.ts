import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operacao-button',
  templateUrl: './operacao-button.component.html',
  styleUrl: './operacao-button.component.scss',
  standalone: true,
})
export class OperacaoButtonComponent {
  @Input() label = ''; // Orientações do componente formulario
  @Input() expression = ''; // Orientações do componente formulario
  @Output() valueChanged = new EventEmitter<string>(); //importa metodos do formulario e enviando as orientações para o formulario de orgigem
  @Output() limpar = new EventEmitter<void>(); //importa metodos do formulario e enviando as orientações para o formulario de orgigem

  backgroundClass = '';
  textClass = '';

  // Inicialização do botão com a cor correta
  ngOnInit(): void {
    if (this.label === 'C') {
      this.backgroundClass = 'btn-danger';
      this.textClass = 'text-white';
    } else {
      this.backgroundClass = 'btn-warning';
      this.textClass = 'text-dark';
    }
  }

  // Evento click do botão
  handleClick() {
    if (this.label === 'C') {
      this.limpar.emit(); // Segue funcionando como botão de limpeza
      return;
    }

    this.valueChanged.emit(this.label); // Deixa o componente pai decidir o que fazer
  }
}
