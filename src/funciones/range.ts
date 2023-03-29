// Importaciones de RxJS
import { Observer, range } from "rxjs";

// Creamos nuestro observer
const observer: Observer<number> = {
  next: (value) => {
    console.log("value: ", value);
  },
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("Range completado"),

}

// Creamos un observable con la función range, puede ser síncrona o asíncrona, en este caso es síncrona, emitirá un rango de números

// Si solo se pasa un argumento, el inicio será 0, y el número de emisiones será el argumento
const obs1$ = range(5);
obs1$.subscribe(observer);

// El primer argumento es el número de inicio y el segundo el número de emisiones
const obs2$ = range(-5, 10);
obs2$.subscribe(observer);
