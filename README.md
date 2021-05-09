# REDUX-FEEDBACK-LOOP

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

This project is a CRUD web app example, which takes values that meet input validation requirements, and recalls them on a Review page for the user to submit. First and foremost, the data collected from each of the app components is stored client side. In order to keep data stored and create less confusion for the user I had built components using React and a predictable store container system using Redux. Each form for data input, needed to be on a new page.  Beginning with basic set up, I created 5 components to import to the App folder.

Starting with the first component, I imported useState from react, and useDispatch/useHistory from react-redux. These technologies will be used for collecting data submitted from this component and moving them to our reducer(discussed later). After these were imported, I had decided it best to template the jsx form so that I may mimic this format on the rest of the feedback/submit components per the web app. Next, I built out a form within the first page return statement. The form element contained a title describing the contents being submitted with, a specific instruction to rate from 1-5. To ensure we get the necessary information from the user, the input element has a required, max/min, and number type attributes. A button is set next to this input element to be clicked once input field is entered.
