import { prompt } from '../utils/stdin.js';

const name = await prompt('Ingrese su nombre: ');

console.log('Hola, ' + name);
