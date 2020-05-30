import utils from '../helpers/utils.js'
import bears from '../helpers/data/bearData.js'

const buildABear = (obj) => {
  let domString = '';
  for (let i = 0; i <obj.length; i++) {
    domString += `
      <div class="card ${obj[i].id}" style="width: 18rem;">
      <img src="${obj[i].img}" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">${obj[i].name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button type="button" class="close" data-target=".${obj[i].id}" data-dismiss="alert">
      <span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
      </button>
      </div>
      </div>
      `
  }
  utils.printToDom('#cards', domString)
}

let newBears = [];

const displayCard = (e) => {
  e.preventDefault();
  const bearCard = bears.getBears();
  for (let i = 0; i < bearCard.length; i++) {
    if (event.target.id === bearCard[i].id) {
      // console.log('Bear ID', bearCard[i].id)
      // console.log('Button ID', event.target.id)
      console.log('Bear Card', bearCard[i])
      newBears.push(bearCard[i]);
    }
  }
 buildABear(newBears)
}

const bearInRiver = () => {
  const riverBears = bears.getBears()
  let domString = '';
  for (let i = 0; i < riverBears.length; i++) {
    const singleBear = riverBears[i];
    domString += `<div class="oneBear">
                  <input type="image" class="showMore" id="${singleBear.id}" src="${singleBear.icon}" />
                  <p class="displayName">${singleBear.name}</p>
                  </div>`
  }
  utils.printToDom('#bearContainer', domString)
  const buttons = document.querySelectorAll('.showMore');
  for(let i = 0; i < buttons.length; i++)buttons[i].addEventListener('click', displayCard);
};

export default { bearInRiver };
