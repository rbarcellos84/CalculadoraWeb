import { Component } from '@angular/core';
import { FormularioComponent } from "./pages/formulario/formulario.component";

@Component({
  selector: 'app-root',
  imports: [FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calculadora';
}
