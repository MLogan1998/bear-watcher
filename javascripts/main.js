import utils from './helpers/utils.js'


const testingTesting = () => {
  let domString = '<h3>Bears</h3>';
  utils.printToDom('#bears', domString);
}

const init = () => {
 testingTesting();
}

init();
