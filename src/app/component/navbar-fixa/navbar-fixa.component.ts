import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-fixa',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar-fixa.component.html',
  styleUrl: './navbar-fixa.component.scss'
})
export class NavbarFixaComponent {
  title = 'violencia-domestica';

  //lógica para o menu hamburguer
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  } 

  isNavbarHidden = false; // Controla se a navbar está retraída
  isFooterVisible = false; // Controla a visibilidade do footer
  private lastScrollTop = 0; // Armazena a posição anterior da rolagem

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    // Verifica se o usuário chegou ao final da página
    this.isFooterVisible = scrollTop + clientHeight >= scrollHeight;

    if (scrollTop > this.lastScrollTop) {
      this.isNavbarHidden = true; // Esconde a navbar ao rolar para baixo
    } else {
      this.isNavbarHidden = false; // Mostra a navbar ao rolar para cima
    }
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evita valores negativos
  }
}
