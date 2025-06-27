import { Component } from '@angular/core';
import { NumericButtonComponent } from '../Component/numeric-button/numeric-button.component';
import { OperacaoButtonComponent } from '../Component/operacao-button/operacao-button.component';

@Component({
  selector: 'app-formulario',
  imports: [NumericButtonComponent, OperacaoButtonComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  expression = '';
  resultado = '0';
  numbersOnly: number[] = [];

  // memoria de calculo
  historico = '= 0';
  calculo1 = '';
  calculo2 = '';
  operacao = '';

  updateExpression(newValue: string) {
    this.expression = newValue;

    // Captura os números inteiros/floats da expressão e atualiza numbersOnly
    const matches = this.expression.match(/\d+(\.\d+)?/g);
    this.numbersOnly = matches ? matches.map(Number) : [];
  }

  // Executa a operação matematica
  executarCalculo() {
    const a = parseFloat(this.calculo1);
    const b = parseFloat(this.calculo2);

    switch (this.operacao) {
      case '+':
        this.resultado = (a + b).toString();
        break;
      case '-':
        this.resultado = (a - b).toString();
        break;
      case '*':
        this.resultado = (a * b).toString();
        break;
      case '/':
        this.resultado = b !== 0 ? (a / b).toString() : 'Erro';
        break;
    }

    // Atualiza o histórico (evita repetir "Erro")
    if (this.resultado !== 'Erro') {
      this.historico = this.resultado;
    }
  }

  processarOperacao(simbolo: string) {
    // Se já temos um calculo1, operação ativa, e digitamos um novo número → calcular
    if (
      this.calculo1 &&
      this.operacao &&
      this.expression.trim() !== ''
    ) {
      this.calculo2 = this.expression;
      this.executarCalculo();

      this.calculo1 = this.resultado;
      this.operacao = simbolo;
      this.expression = '';
      this.historico = `${this.calculo1} ${this.operacao}`;
      return;
    }

    // NOVO CENÁRIO: temos resultado (sem operação), digitamos novo número e clicamos numa operação
    if (
      this.resultado !== '0' &&
      !this.operacao &&
      this.expression.trim() !== '' &&
      this.historico !== '= 0'
    ) {
      this.calculo1 = this.expression;  // usa o novo valor digitado
      this.operacao = simbolo;
      this.resultado = this.expression; // atualiza resultado com novo número
      this.historico = `${this.calculo1} ${this.operacao}`;
      this.expression = '';
      return;
    }

    // Se já temos resultado e vamos iniciar nova operação
    if (this.historico !== '= 0' && this.resultado !== '0' && !this.operacao) {
      this.calculo1 = this.resultado;
      this.operacao = simbolo;
      this.expression = '';
      this.historico = `${this.calculo1} ${this.operacao}`;
      return;
    }

    // Primeira operação após digitar algo
    if (!this.operacao && this.expression.trim()) {
      this.calculo1 = this.expression;
      this.operacao = simbolo;
      this.historico = `${this.calculo1} ${this.operacao}`;
      this.expression = '';
      return;
    }

    // Cenário inválido
    if (!this.expression.trim() && !this.resultado) return;
  }

  resolverExpressao() {
    // Só calcula se tiver operação e algo no expression (calculo2)
    if (!this.calculo1 || !this.operacao || !this.expression.trim()) return;

    this.calculo2 = this.expression;

    const a = parseFloat(this.calculo1);
    const b = parseFloat(this.calculo2);

    switch (this.operacao) {
      case '+':
        this.resultado = (a + b).toString();
        break;
      case '-':
        this.resultado = (a - b).toString();
        break;
      case '*':
        this.resultado = (a * b).toString();
        break;
      case '/':
        this.resultado = b !== 0 ? (a / b).toString() : 'Erro';
        break;
    }

    if (this.resultado !== 'Erro') {
      this.historico = this.resultado;
    }

    // Reset para próxima operação
    this.expression = '';
    this.calculo1 = '';
    this.calculo2 = '';
    this.operacao = '';
  }

  limparTudo() {
    this.expression = '';
    this.resultado = '0';
    this.historico = '= 0';
    this.calculo1 = '';
    this.calculo2 = '';
    this.operacao = '';
  }
}
