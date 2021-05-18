# react

Task1:

Build simple layout using components with React, which are: header, content (main section) and footer.

Create store variable and pass it down to components using props.

Requirements:

use create-react-app as a boilerplate for your application (this one is optional, you can create your own Webpack
config)

in your project please follow suggested folder structure: (here you can also find your own way on how to make a decent
folder structure, this is just my proposal)

index.js file should just import the <App /> component and simply call the ReactDOM.render method. Also you need to
store a variable here called store. This variable should be an object with required fields: user (contains firstName and
lastName) and avatar (contains url and alt).

index.css(index.module.scss/index.scss) should just contain all the basic styles for your app (like rules for html,
body)

Each React component should have its own folder with the jsx and relevant stylesheets.

Then you need to find a way on how to pass the store value through an App component to use this store value in a child
components (Header, Content). Footer Component can be hardcoded for now.

Optional tasks:

use SCSS as a preprocessor

use CSS modules

create an additional index.js file for each component which will just re-export your component. This is always done to
make the import shorter (no hints here, try to research it by yourself)

Task2:

Create two additional components and render them in <Main /> component. One component should be written as a class, and
should have state and proper lifecycle methods (e.g. <CardsContainer />). This component should fetch the data, update
its own state and then map this state to a presentational child component (e.g. <Card />).

Steps which should be covered:

1) Create an additional folder in your project’s root directory which will be called api.

This folded should contain 2 files: mockedResponse.js, and mockedApi.js.

2) mockedResponse.js file should just contain one variable, which will be an array of objects (make 6-8 objects with
   optional fields).

3)the mockedApi.js file contains function, which will return a resolved promise with mockedResponse data.

4)in your project’s ‘src’ folder create an additional folder called ‘components’ and move all components there (you
imports might need to be updated accordingly).

5)In your components folder create an additional folder which will be called Cards.

This folder should contain 2 files for 2 components: <CardsContainer/> and <Card /> and related CSS-files for each of
them.

Note: <CardsContainer /> is a class component and it should have state and proper lifecycle methods. <Card /> component
is just a pure functional component which just should accept several props and render them in a simple card with image
and description (design of the card is up to you)

6)<CardsContainer/> should fetch the data from our mockedApi and update it’s own state. After it the actual state should
be mapped to a <Card /> component. (don’t forget about key property).

7)If there is no cards yet render a fallback JSX like <div>No cards yet</div>.

Task 3:

Summary:

Based on your 2nd task, make an additional opportunity to create and delete cards (for cards I mean any array of objects
with image and description, for example const cards = [{ id:1, category: ‘male’, imgUrl: ‘’, price: 100 }]).

Requirements:

1.Each <Card /> component could be deleted from catalogue by clicking on the cross button (❌) which can be placed
somewhere on the top of each card. After clicking on the button the array of cards in your <CardsContainer /> should be
updated.

2.<CardsContainer /> component should also additionally render <CardsCreationForm /> as its children. This form should
contain all the required inputs for creating the card (find a way on how to use only 1 handler for all the inputs) and a
submit button. By clicking on a submit button the array of cards in your <CardsContainer /> should be updated with the
new card data.

3.All the required handlers for creating/deleting cards should be in the <CardsContainer /> component and passed down to
a child components as a props.

4.Rewrite all classes components to functional components with hooks.

Task 4:

Summary: implement a validation for the <CardCreationForm /> (the form which is used to create a new <Card /> component).

Main task: if the user left one of the required inputs empty -> display an error message like ‘this field is required’
under it (design of the error message is up to you). The user should not be able to add a new card until all the
required fields are filled.

Optional task:  in addition to display the error message you can also scroll to the invalid input, for this you can:

1.use React.createRef() to capture the DOM Nodes of the inputs.

2.use HTML scroll api https://developer.mozilla.org/ru/docs/Web/API/Element/scrollIntoView

Note:  the scroll API might not work as you expect (it depends on the position of your form), so if the form is placed
at the bottom of the page there will be no visual ‘scrolling’ effect. The main idea of the task is to validate your
form. 