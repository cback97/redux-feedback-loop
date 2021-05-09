# Set-UP
[x] - install redux libraries
[x] - create components for base-mode wire-frames
[x] - bring provider,combine reducers, and applyMiddleware into index.js
[x] - create reducers within index.js to collect review data

## index.js
[x] - build reducer per Feelings component
[x] - build reducer per Understanding component
[x] - build reducer per Support component
[x] - build reducer per Comments component
[x] - nest <App/> within Provider 
[x] - create store storeInstance, place logger and combined reducers within
[x] - nest store=storeInstance within opening Provider jsx element


# Components

## App
[x] - import Components 
[x] - import Hash Router
[] - establish Routes for components
## Feelings
[x] - import useDispatch
[x] - import useHistory
[x] - build form 
[x] - Form Title
[] - handleClick event - move to Understanding, push input details into feelingsReducer
[] - create input, require input form validation. input NOT permitted to be less than 0 or greater than 5.
[x] - export default Feelings to App
## Understanding
[x] - import useDispatch
[x] - import useHistory
[x] - build form 
[x] - Form Title
[] - handleClick event - move to Support, push input details into supportReducer
[] - create input, require input form validation. input NOT permitted to be less than 0 or greater than 5.
[x] - export default Feelings to App
## Support
[x] - import useDispatch
[x] - import useHistory
[x] - build form 
[x] - Form Title
[] - handleClick event - move to Comments, push input details into commentsReducer
[] - create input, require input form validation. input NOT permitted to be less than 0 or greater than 5.
[x] - export default Feelings to App
## Comments
[x] - import useDispatch
[x] - import useHistory
[x] - build form 
[] - handleClick event - move to Review
[x] - create input
[x] - Form Title
[x] - export default Feelings to App 
## Review
[x] - import useSelector
[x] - import useHistory
[x] - build form
[x] - Form Title
[] - handleClick event - move to Feelings
[x] - Display data from reducers in <p> format
[x] - export default Feelings to App
