// Importaciones de RxJs
import { Observer, Observable } from 'rxjs';

// Creamos nuestro observer
const observer: Observer<any> = {
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

  // El return es para cuando se llame al unsubscribe, aqui limpiamos los intervalos
  return () => {
    clearInterval(interval);
    console.log('Intervalo destruido');
  }
});

// El subscribe retorna un "Subscription", tenemos 3 subscripciones, 3 ejecuciones diferentes
const subscriptionOne = intervalo$.subscribe(observer);
const subscriptionTwo = intervalo$.subscribe(observer);
const subscriptionThree = intervalo$.subscribe(observer);

// Después de 3 segundos nos desuscribimos y esto lanzaría el return del observable
setTimeout(() => {
  subscriptionOne.unsubscribe();
  subscriptionTwo.unsubscribe();
  subscriptionThree.unsubscribe();
}, 3000);