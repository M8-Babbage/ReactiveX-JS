// Importaciones de RxJs
import { Observer, of } from 'rxjs';

// Creamos el observer
const observer: Observer<number> = {
  next: (value) => console.log('value: ', value),
  error: (error) => console.warn('error', error),
  complete: () => console.info('Observable completado')
}

// La función of crea un observable que emite los valores que se le pasan como argumentos, es un método syncrono, al finalizar llama al método complete
const obs$ = of(1, 2, 3, 4, 5, 6);

console.log("Inicio del obs$");
obs$.subscribe(observer);
console.log("Fin del obs$");