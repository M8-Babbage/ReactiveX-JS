// Importaciones de RxJS
import { from, Observer } from "rxjs";

// Creamos nuestro observer
const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("completado"),
};

/**
 * La función from nos permite crear un observable a partir de un array, promise, iterable, observable, o un objeto que tenga un método Symbol.iterator
 */

const from$ = from('Laura');
const from2$ = from([1, 2, 3, 4]);

// Nos subscribimos a nuestros observables
from$.subscribe(observer);
from2$.subscribe(observer);