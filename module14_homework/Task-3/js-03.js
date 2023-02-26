const btn = document.querySelector("#button");
const output = document.querySelector("#output");//div

console.log(btn);
console.log(output);

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
      
    output.innerHTML = cards;
  }


// Вешаем обработчик на кнопку для запроса
  btn.addEventListener('click', () => {
let input = +document.querySelector("#input").value;
    if (input < 1 || input > 10) {
     diffResult();
    } else{
      useRequest('https://picsum.photos/v2/list/?limit=5', displayResult);
    }
    
    })

function diffResult(){
  const p = `<p>"число вне диапазона от 1 до 10"</p>`;
  output.innerHTML = p;
  
}
