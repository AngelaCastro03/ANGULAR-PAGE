import { Injectable } from '@angular/core';

export interface Herramienta {
  nombre: string;
  descripcion: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class HerramientasService {
  private herramientas: Herramienta[] = [
    { 
      nombre: 'Scratch', 
      descripcion: 'Plataforma visual para programar historias interactivas.', 
      url: 'https://scratch.mit.edu/' 
    },
    { 
      nombre: 'Code.org', 
      descripcion: 'Sitio educativo con cursos de programación para todas las edades.', 
      url: 'https://code.org/' 
    },
    { 
      nombre: 'App Inventor', 
      descripcion: 'Entorno para crear aplicaciones móviles sin conocimientos avanzados.', 
      url: 'https://appinventor.mit.edu/' 
    },
    { 
      nombre: 'Minecraft: Education Edition', 
      descripcion: 'Versión educativa del popular juego con herramientas para programar.', 
      url: 'https://education.minecraft.net/' 
    },
    { 
      nombre: 'Lightbot', 
      descripcion: 'Juego de puzzles que enseña fundamentos de programación.', 
      url: 'https://lightbot.com/' 
    }
  ];

  constructor() { }

  getHerramientas(): Herramienta[] {
    return this.herramientas;
  }
}