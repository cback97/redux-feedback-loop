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
[] - nest <App/> within Provider 
[] - create store storeInstance, place logger and combined reducers within
[] - nest store=storeInstance within opening Provider jsx element


# Components

## App
[] - import Components 
[] - import Hash Router
[] - establish Routes for components
## Feelings
[] - import useDispatch
[] - import useHistory
[] - handleClick event - move to Understanding, push input details into feelingsReducer
[] - create input, require input form validation. input NOT permitted to be less than 0 or greater than 5.
[] - 
## Understanding
[] - import useDispatch
[] - import useHistory
[] - handleClick event - move to Support, push input details into supportReducer
[] - create input, require input form validation. input NOT permitted to be less than 0 or greater than 5.
[] -
## Support
[] - import useDispatch
[] - import useHistory
[] - handleClick event - move to Comments, push input details into commentsReducer
[] - create input, require input form validation. input NOT permitted to be less than 0 or greater than 5.
[] -
## Comments
[] - import useDispatch
[] - import useHistory
[] - handleClick event - move to Review
[] - create input, require input form validation
[] - Title of sub-page
[] - 
## Review
[] - import useSelector
[] - import useHistory
[] - handleClick event - move to Feelings
[] - Display data from reducers in <p> format
