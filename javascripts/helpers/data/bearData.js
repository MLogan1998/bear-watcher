import utils from '../../helpers/utils.js'

const bearData = [];

const bearIcon = () => {
   let lilBear = document.querySelector('input[type = radio]:checked').value;
     switch (lilBear) {
       case 'option1':
         return ('../../../assets/images/grizzlybear.png');
         break;
       case 'option2': 
         return ('../../../assets/images/polarbear.png');
         break;
       case 'option3':
         return ('../../../assets/images/blackbear.png');
         break;
       case 'option4':
         return ('../../../assets/images/pandabear.png');
         break;
    }
};

const bearObj = (e) => {
  e.preventDefault();
  let newBear = {};
  newBear.id = 'id' + Date.now();
  newBear.img = document.querySelector('#bearImage').value;
  newBear.name = document.querySelector('#bearName').value;
  newBear.icon = bearIcon();
  bearData.push(newBear);
  console.log(newBear);
}

export default { bearObj };
