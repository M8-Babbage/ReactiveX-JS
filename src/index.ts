// Importaciones de RxJs
import { Observable, Subject } from 'rxjs';

// Creamos el observable
const intervalo$ = new Observable<number>(subscriber => {
  const intervalo = setInterval(() => {
    subscriber.next(Math.random());
  }, 1000);

  return () => {
    clearInterval(intervalo);
    console.log('Intervalo destruido');
  }
})

/**
 * 1. Casteo múltiple, muchas subscripciones están sujetas a este mismo observable, distribuir a todos los lugares que les interese este valor
 * 2. También es un observer
 * 3. Next, error, complete
 * Permite crear un Hot Observable ya que se puede emitir valores en cualquier momento.
 */
const subject$ = new Subject();
const subject = intervalo$.subscribe(subject$);

// Aquí se puede ver que el subject$ es un observer, por lo que se puede usar como tal, y se puede usar para emitir valores, como se puede ver en el setTimeout.
const observableOne = subject$.subscribe(console.log);
const observableTwo = subject$.subscribe(console.log);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subject.unsubscribe();
}, 3500);