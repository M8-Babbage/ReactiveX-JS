// Importaciones de RxJs
import { Observer, Observable, Subscription } from 'rxjs';

// Creamos nuestro observer
const observer: Observer<number> = {
  next: (value) => console.log('next', value),
  error: (error) => console.warn('error', error),
  complete: () => console.info('complete')
}

// Creamos nuestro observable
const intervalo$ = new Observable<number>(subscriber => {
  let count = 0;
  // Generamos un intervalo cada segundo y emitimos un valor del contrador en 1
  const interval = setInterval(() => {
    subscriber.next(count++);
  }, 1000);

  // Ejecutar despues de 2.5 segundos
  setTimeout(() => {
    // Si se lanza el complete, el observable se completa y no se ejecuta más, se llama el return del observable, también se lanza cuando se llama al unsubscribe
    subscriber.complete();
  }, 2500);

  // El return es para cuando se llame al unsubscribe, aqui limpiamos los intervalos, también se lanza cuando se completa el observable
  return () => {
    clearInterval(interval);
    console.log("Complete realizado");
    console.log('Intervalo destruido');
  }
});

// El subscribe retorna un "Subscription", tenemos 3 subscripciones, 3 ejecuciones diferentes
const subscriptionOne = intervalo$.subscribe(observer);
const subscriptionTwo = intervalo$.subscribe(observer);
const subscriptionThree = intervalo$.subscribe(observer);

// Después de 3 segundos nos desuscribimos y esto lanzaría el return del observable
setTimeout(() => {
  // -- MÉTODO 1 --
  // Desuscribimos a las 3 subscripciones
  // const subscriptions = [subscriptionOne, subscriptionTwo, subscriptionThree];
  // for (const subscription of subscriptions) {
  //   subscription.unsubscribe();
  // }

  // -- MÉTODO 2 --
  // Desuscribimos a las 3 subscripciones
  const subscriptions = new Subscription();
  subscriptions.add(subscriptionOne);
  subscriptions.add(subscriptionTwo);
  subscriptions.add(subscriptionThree);
  subscriptions.unsubscribe();
  console.log('Completado timeout');
}, 6000);