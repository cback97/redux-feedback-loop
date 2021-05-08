# Set-UP
[x] - install redux libraries
[x] - create components for base-mode wire-frames
[] - bring provider,combine reducers, and applyMiddleware into index.js
[] - create reducers within index.js to collect review data

## index.js
[] - build reducer per Feelings component
[] - build reducer per Understanding component
[] - build reducer per Support component
[] - build reducer per Comments component


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
