import utils from '../helpers/utils.js'
import data from '../helpers/data/bearData.js'

const makeForm = () => {
  let domString = `
        <form class="bearInputs" id="bearSubmit">
        <div class="form-group mb-2">
        <label for="bearName" class="pt-2">Bear Name:</label>
        <input type="text" class="form-control" id="bearName" placeholder="Name Your Bear" required>
        </input>
        </div>
        <div class="form-group mb-2">
        <label for="bearImage">Bear Image URL:</label>
        <input type="text" class="form-control" id="bearImage" placeholder="Image URL" required>
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
        <button type="submit" class="btn btn-outline-light mt-2 submitButton">Submit</button>
        </div>
        </form>`;

utils.printToDom('#form', domString);
$('#bearSubmit').on('submit', data.bearObj)
}

export default { makeForm }
