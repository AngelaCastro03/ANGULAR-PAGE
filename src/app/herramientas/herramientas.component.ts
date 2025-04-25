import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerramientasService, Herramienta } from '../services/herramientas.service';

@Component({
  selector: 'app-herramientas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './herramientas.component.html',
  styleUrl: './herramientas.component.css'
})
export class HerramientasComponent implements OnInit {
  herramientas: Herramienta[] = [];

  constructor(private herramientasService: HerramientasService) { }

  ngOnInit(): void {
    this.herramientas = this.herramientasService.getHerramientas();
  }
}
