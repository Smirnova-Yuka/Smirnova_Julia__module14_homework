const btn = document.querySelector("#button");
const output = document.querySelector("#output");//div

console.log(btn);
console.log(output);

function useRequest(url) {
    
  const options = {
    method: 'GET',
    mode: 'cors'
   };
fetch(url, options)
  .then((response) => {
      console.log("responce",response)
    let url = response.url
      console.log(url)
    return url
  })
  .then((url) => {
    let cards = ""
    const cardBlock = `<div class="card"><img src="${url}" class="card-image"/></div>`;
      console.log(`${url}`)
    cards = cards + cardBlock;
      console.log(cards)
    output.innerHTML = cards;
  })
        
  .catch(() => {
    console.log('error')
  });
 };

function error() {
        const error = `<div><p>Числа вне диапазона от 100 до 300</p></div>`
        output.innerHTML = error;
    };

//обработчик для кнопки
btn.addEventListener("click", async () => {
      console.log("start");
    let input1 = +document.querySelector('#input-1').value;
    let input2 = +document.querySelector('#input-2').value;
      console.log(input1);
      console.log(input2);
    if(input1 > 300 && input1 < 100 && input1 === 0 && input2 > 300 && input2 < 100 && input2 === 0) {
        error ()
    } else {
        let siteUrl =`https://picsum.photos/${input1}/${input2}`;
        const result = await useRequest(siteUrl);
        console.log("Значение", siteUrl);
        console.log("end");
    }}
    );