// Importamos observable de RxJS
import { Observable, Observer } from 'rxjs';

// Creamos un observer para recibir las posibles respuestas del observable
const observer: Observer<string> = {
  next: (v) => console.log('next: ', v),
  error: (err) => console.warn('error: ', err),
  complete: () => console.info('complete')
}

// Cold observable, emite los valores dentro de sí mismo
const obs$ = new Observable<string>(subscriber => {
  // Primera emisión del observable
  subscriber.next('Hola');
  // Segunda emisión del observable
  subscriber.next('Mundo');

  // En dado caso se genere un error, pasará por el error "en el subscribe" y no se emitirá más información

  // Al lanzar el complete no se emite más información
  subscriber.complete();
});


// obs$.subscribe(console.log);
// obs$.subscribe(resp => console.log(resp));
// obs$.subscribe({
//   next: (v) => console.log('next: ', v),
//   error: (err) => console.warn('error: ', err),
//   complete: () => console.info('complete')
// });

obs$.subscribe(observer);