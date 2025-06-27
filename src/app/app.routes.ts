import { Routes } from '@angular/router';
import { FormularioComponent } from './pages/formulario/formulario.component';

export const routes: Routes = [
  {
    path: '', // Caminho vazio representa a raiz da aplicação
    redirectTo: '/calculadora', // Redireciona para /calculadora
    pathMatch: 'full' // Garante que o caminho completo seja correspondido
  },
  {
    path: 'calculadora', // Rota de navegação
    component: FormularioComponent // Nome do componente
  }
];
