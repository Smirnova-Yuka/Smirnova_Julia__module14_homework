//01
/*Вам дана заготовка и результат, который вы должны получить. 
Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.*/

const parser = new DOMParser();
const xmlString = `
  <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
console.log('xmlString', xmlString);


const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const studentNode = xmlDOM.querySelectorAll("student");
console.log('studentNode', studentNode);


const list = [];

studentNode.forEach(x =>{
  let studentX = {
    name:`${x.querySelector("first").textContent}${x.querySelector("second").textContent}`,  
    age: x.querySelector("age").textContent, 
    prof: x.querySelector("prof").textContent,
    lang: x.querySelector("name").getAttribute('lang'), // Получение данных из атрибута               
  }
  list.push(studentX);//Добавляем в массив
});

console.log("list:", list); //???не понимаю как сделать пробел между именем и фамилией???


