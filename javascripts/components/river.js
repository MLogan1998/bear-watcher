import utils from '../helpers/utils.js'
import bears from '../helpers/data/bearData.js'


const closeCard = (e) => {
  e.preventDefault();
  let tempCard = newBears;
  for (let i = 0; i < newBears.length; i++) {
    if (event.target.id === newBears[i].id){
    tempCard.splice(i,1);
  }
}
  buildABear(tempCard);
}



const buildABear = (obj) => {
  let domString = '';
  for (let i = 0; i <obj.length; i++) {
    domString += `
      <div class="card ${obj[i].id} bearCard" style="width: 18rem;">
      <img src="${obj[i].img}" class="card-img-top bearCardImg" alt="...">
      <h5 class="card-header">${obj[i].name}</h5>
      <div class="card-body">
      <p class="card-text">Fish Eaten: <span class="cardDetail">${obj[i].fishCaught}</span></p>
      <div class="trackingDiv"><p class="card-text mb-4">Tracking Since: <span class="cardDetail">${obj[i].tracking}</span></p></div>
      <button type="button" id="${obj[i].id}" class="btn btn-outline-danger closeCards">Close</button>
      </div>
      </div>
      `
  }
  utils.printToDom('#cards', domString)
  const closeButton = document.querySelectorAll('.closeCards');
  for(let i = 0; i < closeButton.length; i++)closeButton[i].addEventListener('click', closeCard);
}

let newBears = [];

const displayCard = (e) => {
  e.preventDefault();
  const bearCard = bears.getBears();
  for (let i = 0; i < bearCard.length; i++) {
    if (event.target.id === bearCard[i].id) {
      newBears.push(bearCard[i]);
    }
  }
 buildABear(newBears)
}

const catchFish = (e) => {
  e.preventDefault();
  const catch1 = bears.getBears();
  for (let i = 0; i < catch1.length; i++) {
    if (event.target.id === catch1[i].id) {
      catch1[i].fishCaught++;
      console.log(catch1[i])
    }
  }
}
const bearInRiver = () => {
  const riverBears = bears.getBears()
  let domString = '';
  for (let i = 0; i < riverBears.length; i++) {
    const singleBear = riverBears[i];
    domString += `<div class="oneBear">
                  <input type="image" class="showMore" id="${singleBear.id}" src="${singleBear.icon}" />
                  <p class="displayName mb-1">${singleBear.name}</p>
                  <span class="pleaseCatch" style="color: orange;"><i id="${singleBear.id}" class="fas fa-fish fa-lg"></i></span>
                  </div>`
  }
  utils.printToDom('#bearContainer', domString)
  const buttons = document.querySelectorAll('.showMore');
  for(let i = 0; i < buttons.length; i++)buttons[i].addEventListener('click', displayCard);
  const goneFishin = document.querySelectorAll('.pleaseCatch');
  for(let i = 0; i < goneFishin.length; i++)goneFishin[i].addEventListener('click', catchFish);
};

export default { bearInRiver };
