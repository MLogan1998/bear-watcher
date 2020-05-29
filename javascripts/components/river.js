import utils from '../helpers/utils.js'
import bears from '../helpers/data/bearData.js'


const bearInRiver = () => {
  const riverBears = bears.getBears()
  console.log(riverBears)
  let domString = '';
  for (let i = 0; i < riverBears.length; i++) {
    const singleBear = riverBears[i];
    domString += `<div class="oneBear">
                  <img src="${singleBear.icon}">
                  <p class="displayName">${singleBear.name}</p>
                  </div>`
  }
  utils.printToDom('#bearContainer', domString)
};

export default { bearInRiver };
