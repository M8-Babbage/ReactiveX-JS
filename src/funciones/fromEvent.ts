// Importaciones de RxJS
import { fromEvent, Observer } from "rxjs";

// Creamos nuestro observer
const observer: Observer<PointerEvent> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("completado"),
}

// El evento se saca haciendo un log del value
const obs$ = fromEvent<PointerEvent>(document, "click");

// Nos subscribimos al observable
obs$.subscribe(observer);