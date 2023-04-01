// Importaciones de RxJS
import { interval, timer, Observer } from "rxjs";

// Creacion del observer
const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("completado"),
}

// Creamos el interval usando la función interval, en este caso, inicia en 0 y se ejecuta cada 1 segundo
const interval$ = interval(1000);

// Interval es un proceso asíncrono
console.log("Inicio Interval");
interval$.subscribe(observer);
console.log("Fin Interval");


// Creamos el timer usando la función timer, en este caso, inicia en 2 segundos y se ejecuta cada 1 sola vez emitiendo el 0, llamando al complete
const timer$ = timer(2000);
// Se ejecuta a los 2 segundos y después se estará ejecutando cada 1 segundo
const timer2$ = timer(2000, 1000);
// Podemos pasarle una fecha al timer para que se ejecute en ese momento, recibe Dates
const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);
const timer3$ = timer(hoyEn5);

// El timer es un proceso asíncrono
console.log("Inicio Timer");
timer$.subscribe(observer);
timer2$.subscribe(observer);
timer3$.subscribe(observer);
console.log("Fin Timer");