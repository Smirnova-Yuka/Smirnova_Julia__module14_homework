//02
/* Вам дана заготовка и результат, который вы должны получить. 
Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.
*/
const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
  ]
}`;

console.log('jsonString', jsonString);

/*Получение данных */
const data = JSON.parse(jsonString);
console.log('data', data);

