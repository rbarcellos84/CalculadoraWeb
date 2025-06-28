import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numeric-button',
  imports: [],
  templateUrl: './numeric-button.component.html',
  styleUrl: './numeric-button.component.scss'
})
export class NumericButtonComponent {
  @Input() label = ''; // Informação que será exibida no botão
  @Input() expression = ''; // Armazenamento da informação digitada

  @Output() valueChanged = new EventEmitter<string>(); //importa metodos do formulario e enviando as orientações para o formulario de orgigem

  handleClick() {
    if (this.label === '.') {
      // Encontrar o último número da expressão atual
      const partes = this.expression.split(/[\+\-\*\/]/);
      const ultimoNumero = partes[partes.length - 1];

      // Só permite adicionar "." se o último número ainda não contiver um ponto
      if (ultimoNumero === '' || ultimoNumero.includes('.')) {
        return; // Impede múltiplos pontos no mesmo número
      }
    }

    const updatedExpression = this.expression + this.label;
    this.valueChanged.emit(updatedExpression);
  }
}
