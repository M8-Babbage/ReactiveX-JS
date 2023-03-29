import { asyncScheduler } from "rxjs";

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

/*
* Con el asyncScheduler podemos crear un setTimeout o un setInterval de forma asíncrona, nos devuelve un Subscription
*/

const saludar = () => console.log("Hola Mundo");
const saludar2 = (nombre: string) => console.log(`Hola Laura ${nombre}`);
const saludar3 = ({ nombre, apellido }: any) => console.log(`Hola Laura ${nombre} ${apellido}`);


// Simulando el mismo efecto del setTimeOut
// Llamar cuando no tenemos parámetros
asyncScheduler.schedule(saludar, 3000);
// Llamar cuando tenemos parámetros, solo se puede enviar uno
asyncScheduler.schedule(saludar2, 3000, "Ximena");
// Si necesitamos enviar más de un argumento
asyncScheduler.schedule(saludar3, 3000, { nombre: "Ximena", apellido: "Susano" });

// Simulando el mismo efecto del setInterval, pero con el asyncScheduler
// El primer argumento es la función que se va a ejecutar, el segundo es el tiempo de espera, y el tercero es el argumento que se va a enviar a la función
const subs = asyncScheduler.schedule(function (state) {
  console.log("Hola Mundo");
  // Aquí volvemos a llamar el schedule, pero con el state + 1, para que se ejecute cada vez que se llame con un delay de 1 sg
  // this.schedule(state + 1, 1000);
  // Aquí volvemos a llamar el schedule, pero con el state + 1, para que se ejecute cada vez que se llame con un delay de 0 sg
  this.schedule(state + 1, 0);
}, 3000, 0);


// Cancelamos la subscripción cuando pasen 6 segundos
// setTimeout(() => {
//   subs.unsubscribe();
// }, 6000);
asyncScheduler.schedule(() => subs.unsubscribe(), 6000);