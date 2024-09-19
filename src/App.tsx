import { log } from 'console';
import React from 'react';

// let name: string  = 'Apal'
// name = 20   // так типизировать нельзя!

// let price: number = 20
// let atStock: boolean = true  // примитивные типизация

// let names: string[] = ['Apal',  'Husish', 'Kutush']
// let numbers: number[] = [1, 2, 3]

// const order: object = {
//   title: 'BMW',
//   count: 2
// } // // так типизировать нельзя!


// const order: {title: string, count: number} = {
//   title: 'BMW',
//   count: 2
// } // // так типизировать не удобно потому что нельзя его переиспользовать и придется заново прописать !

// type Order = {
//   title: string
//   count: number
// }
// const order: Order = {
//   title: 'BMW',
//   count: 2
// }
//////////////////////
// type Order = {
//   title: string
//   count?: number
// }

// const order: Order = {
//   title: 'BMW',
// }


// type Order = {
//   title: string
//   count?: number
// }

// const order: Order[] = [
//   {title: 'BMW'},
//   {title: 'TESLA', count: 1}
// ]
  

///////////////Типы для функции //////////
// const printTitle = (title: string) => {
// console.log(title);
// }
// printTitle('Apal')

// type PrintTitle = (title: string) => void  // void - ислполвуется тогда когда функция ничего не возврашает

// const printTitle: PrintTitle  = (title: string) => {
//   console.log(title);
//   }
//   printTitle('Apal')


// type PrintTitle = (title: string) => string  

// const printTitle: PrintTitle  = (title: string) => {
//   return title
//   }
//   console.log(printTitle('Apal'));

// const test: unknown = 'test'
// console.log(test.trim());


// /// ничего не возврашает never
// type PrintTitle = (title: string) => never

// const printTitle: PrintTitle = (title) => {
//   console.log(title);
// }
// printTitle('Apal')


// type Order = {
//   title: string
//   count?: number
// }

// interface MyOrder {
//   title: string
//   count?: number
// }

// type X = {
//   a?: number
//   b?: string
// }

// type Y = X & {
//   c: string
//   d: number
// }

// let y: Y = {
//   c: 'test', 
//   d: 6,
//   // a: 4,
//   // b: 'test2'
// }

// /////////////////////////////////////////
// interface Auto {
//   country?: string
// }

// interface BMW extends Auto{
//   model: string
//   year: number
// }

// const bmw: BMW =  {
// model: '5',
// year: 2024,
// country: 'Germany'
// }

// type X = {
//   a: string
//   b: number
// }
// interface BMW extends X{
//   model: string
//   year: number
// }

interface BMW {
  model: string
  year: number
}

type X = BMW & {
  a: string
  b: number
}

let number: null | number = null 
number = 10




const App = () => {
  return (
    <div>
      
    </div>
  );
};

export default App;