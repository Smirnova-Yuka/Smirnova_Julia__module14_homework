const btn = document.querySelector("#button");//кнопка
const output = document.querySelector("#output");//div

console.log(btn);//кнопка
console.log(output);//div

function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
          callback(result);
        }
      }
    };
    
    xhr.onerror = function() {
      console.log('Ошибка! Статус ответа: ', xhr.status);
    };
    
    xhr.send();
  };

/**
    * Функция обработки полученного результата
    * apiData - объект с результатом запроса
    */

function displayResult(apiData) {
    let cards = '';
    
    apiData.forEach(item => {
      const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <p>${item.author}</p>
        </div>
      `;
      cards = cards + cardBlock;
    });
     
    output.innerHTML = cards;}


//обработчик на кнопку для запроса
 btn.addEventListener("click", async () => {
        console.log("start");
    let input1 = +document.querySelector("#input-1").value;
    let input2 = +document.querySelector("#input-2").value;
   console.log(input1);
   console.log(input2);
   
    if(input1 >= 1 && input1 <= 10 && input2 >= 1 && input2 <= 10) { 
      
      let siteUrl =`https://picsum.photos/v2/list?page=${input1}&limit=${input2}`
        const result = useRequest(siteUrl, displayResult);
        console.log("Значение", siteUrl);
        
    } else  if(input1 >= 1 && input1 <= 10 && input2 < 1 && input2 > 10){
      console.log("Лимит вне диапазона от 1 до 10");
    }else  if(input1 < 1 && input1 > 10 && input2 >= 1 && input2 <= 10){
      console.log("Номер страницы вне диапазона от 1 до 10");
    }else{
      console.log("Лимит вне диапазона от 1 до 10");
      console.log("Номер страницы вне диапазона от 1 до 10");
      console.log("end");
    }
  
    });