import utils from '../helpers/utils.js'
import river from './river.js'

const makeForm = () => {
  let domString = `
        <form class="bearInputs">
        <div class="form-group mb-2">
        <label for="bearName" class="pt-2">Bear Name:</label>
        <input type="text" class="form-control" id="bearName" placeholder="Name Your Bear">
        </div>
        <div class="form-group mb-2">
        <label for="bearImage">Bear Image URL:</label>
        <input type="text" class="form-control" id="bearImage" placeholder="Image URL">
        </div>
        <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="bearType" id="grizzlyBear" value="option1" checked>
        <label class="form-check-label" for="grizzlyBear">
        Grizzly Bear
        </label>
        </div>
        <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="bearType" id="polarBear" value="option2">
        <label class="form-check-label" for="polarBear">
        Polar Bear
        </label>
        </div>
        <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="bearType" id="blackBear" value="option3">
        <label class="form-check-label" for="blackBear">
        Black Bear
        </label>
        </div>
        <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="bearType" id="pandaBear" value="option4">
        <label class="form-check-label" for="pandaBear">
        Panda Bear
        </label>
        </div>
        </div>
        <div>
        <button type="submit" class="btn btn-primary mt-2">Submit</button>
        </div>
        </form>`;

utils.printToDom('#form', domString);
document.querySelector('.btn').addEventListener('click', river.bearObj)
}

export default { makeForm }
