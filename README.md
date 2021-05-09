# REDUX-FEEDBACK-LOOP

## Description

This project is a CRUD web app example, which takes values that meet input validation requirements, and recalls them on a Review page for the user to submit. First and foremost, the data collected from each of the app components is stored client side. In order to keep data stored and create less confusion for the user I had built components using React and a predictable store container system using Redux. Each form for data input, needed to be on a new page.  Beginning with basic set up, I created 5 components to import to the App folder.

Starting with the first component, I imported useState from react, and useDispatch/useHistory from react-redux. These technologies will be used for collecting data submitted from this component and moving them to our reducer(discussed later). After these were imported, I had decided it best to template the jsx form so that I may mimic this format on the rest of the feedback/submit components per the web app. Next, I built out a form within the first page return statement. The form element contained a title describing the contents being submitted with, a specific instruction to rate from 1-5. To ensure we get the necessary information from the user, the input element has a required, max/min, and number type attributes. A button is set next to this input element to be clicked once input field is entered correctly. Then, I used javascript logic to create a function that will take the input fields entered values on submit of the form, and push the authorized data into the components designated redux reducer.

For each component that required an input field, I used the same template and logic as the aforementioned component. Once the pages collecting user data were fulfilled, I had placed all the collected user data onto a review page. The review page uses a technology from the react-redux library called useSelector, which allows us to grab information from our reducers. In the return statement for this component, I built another form which displayed the data from each of the input form components specific reducers in a list of paragraph element tags. Once the user has viewed these, they are able to click the submit button. 

To collect this data, as mentioned previously, we needed to create react reducers. Each reducer was made specific to each component with an input field within the index.js file. These reducers are set to receive data from there designated components upon submission of data. Each reducer was placed in a store using the createStore technology. 

Lastly, I needed to establish routes so that the user could be taken to a new page each time a given components input field was submitted, which allows them to enter the next field of information. To do this, in the App.jsx file, I had to import the useHistory technology from the react-router-dom library. With this I was able to establish routes to each component. Next each component needed to have history.push logic implemented into its' JS logic handler, so that upon the click of the button, it would prompt you to the next input form. 

## Usage
This app is very easy to use
    1. Open page, and enter an input per web app instruction.
    2. Click submit
    3. Do this for rest of input form pages.
    4. Once on review page, the user is able to view what they submitted.
    5. Click submit review button, to be brought back to home page.

### This app was built using:
- Node.js: https://nodejs.org/
- React: https://reactjs.org/
- Redux: https://redux.js.org/
- HTML 5
- CSS3
- Javascript

## Acknowledgement
Thank you, Prime Digital Academy, for providing great course structure, and above and beyond instruction. Without you, this would not have been possible so soon.

## Support
If you have suggestions or issues, please email me at cdirt27@gmail.com.

