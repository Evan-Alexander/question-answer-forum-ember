# question-answer-forum

A question and answer forum where a user may submit a question and others can respond with answers.
Functionality will work as follows:
- Questions have the content of the question itself, an author and additional notes.
- Answers have the content of the answer and the author.
- A header with a navbar that appears on all pages containing the name of your site and a link to the home page.
- A List all questions appears on the homepage, with only the question and the name of the author showing.
- Users are be able to click on a question, and be routed to another page containing additional information.
- App will allow users to add and edit questions.
- App will allow users to add answers to a question. Answers should be added and viewed on the same page as the question they respond to.

## Technologies used:
- Primarily written in Javascript.
- Others: HTML, CSS, Bootstrap, Node.js, Ember.js, and Bower

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

### Usage

* Go to my Github repository (https://github.com/Evan-Alexander/question-answer-forum-ember)

* From your terminal:

* `git clone` this repository to your Desktop
* `cd question-answer-forum`

### Install Node Package Manager

```bash
$ npm install   # Needed to update necessary dependencies.
```

### Install Bower Package Manager

```bash
$ bower install   # Handles front end packages like Jquery and Bootstrap.

## Now you may view the project on your computer by running:

```bash
$ ember serve   # Starts the local server on your computer.
```
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)


## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
* [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
* [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

&nbsp;
## Specifications

| Behavior | Input 1 | Output |
|--------|-------|------|
| User clicks on a button to ask a question. |button click| form appears offering input fields 'name', 'question', and 'additional notes'|
| User enters a name. | "John Brown" | "John Brown" |
| User enters a question. | "In A Princess Bride, who was the actor that played the Six Fingered Man?"| "In A Princess Bride, who was the actor that played the sixth findered man?" |
| User edits the same question. | "In A Princess Bride, who was the actor that played the Six Fingered Man?"| "In A Princess Bride, who was the actor that played the Six Fingered Man?" |
| User adds additional notes. | "Wasn't he also in Spinal Tap?" | "Wasn't he also in Spinal Tap?"  |
| A different user sees a list of questions on the home page. | Clicks on the question listed above.  | User is routed to a unique page containing all information about the question.
| The user clicks on a button to answer a question. | A form appears to enter a 'name' and an 'answer'.| User enters fields.
| User enters a name | 'Mike Wilson' | 'Mike Wilson' |
| User answers the question. | "Christopher Guest!  And yes, he was!  'This one goes to 11.'" | "Christopher Guest!  And yes he was!  'This one goes to 11.'" |
| The same user decides to update his answer. | "Christopher Guest!  And yes, he was!  'This one goes to 11.'" | "Christopher Guest!  And yes, he was!  'This one goes to 11!' The guy is genious." |
|User clicks on 'submit answer'|'submit answer'| The answer is displayed on the question page with all other answers.|


## Planning

Integration
* Add and update README.md with tech specs, functionality specs, and project planning.
* ember g route index
* app/templates/index.hbs - Add first bit of information to home page.
* ember g model question - Create model hook for application.
* app/models/question.js - Create attributes for question model.
* ember install emberfire - set up Firebase connection.
* questions.json - create database seed file in json format.
* Create question/answer database account in Firebase.
* Update user permissions.
* config/environment.js - configure app to work with Firebase
* app/routes/index.js - update model hook
* app/templates/application.hbs - add navbar, footer for all of application
* ember g component question-tile - create first component
* app/templates/index.hbs - add question-tile component to index.hbs in for-loop
* app/templates/components/question-tile.hbs - add code to display question details
* app/templates/components/question-tile.hbs - add delete button to question-tile
* app/components/question-tile.js - add delete action
* app/templates/index.hbs - add delete action in route handler that calls question-tile component
* app/routes/index.js - create delete action in route handler
* app/templates/index.hbs - add save action in index templates
* ember g component new-question - create component to create new questions
* app/templates/components/new-question.hbs - add save button
* app/components/new-question.js - add behavior to button
* app/templates/components/new-question.hbs - add form to add a question, author, and additional notes
* app/components/new-question.js - add functionality to save button
* app/routes/index.js - add route handler to new question
* ember g component edit-question - generate edit-question component
* app/templates/components/question-tile.hbs - pass in question object and edit action
* app/templates/components/edit-question.hbs - add edit-question form; add editQuestionForm action; bind update to save action
* app/components/edit-question.js - create editQuestionForm action; bind update to save action
* app/components/question-tile.js - pass edit action to question-tile
* app/templates/index.hbs - pass edit action to index.hbs within for-loop
* app/routes/index.js - add keys object to update function to save previously recorded content upon update action
* ember g route question - create route to display a dynamic single question (page)
* app/router.js - add question_id to router.map
* app/routes/question.js - add findRecord function
* app/templates/question.hbs - call model.author and model.question to display on dynamic page
* ember g component question-detail - create component to display all question attributes (including additional notes)
* app/templates/question.hbs - define question variable as the current model
Refactor -
* app/templates/components/question-detail.hbs - move delete button
* app/components/question-detail.js - move delete action
* app/templates/question.hbs - move edit-question component from question-tile; pass in edit-question component model
* app/routes/question.js - move edit and delete actions from index.js
* app/routes/index.js - move create new question action to index.js
* app/templates/index.hbs - pass in new-question component with create new question action
* app/templates/components/question-tile-tile.hbs - remove delete button; add link to question route



UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

Polish


&nbsp;
## Known Bugs
* No known bugs

Copyright (c) 2017 Jason Brown

This software is licensed under the GPL license
