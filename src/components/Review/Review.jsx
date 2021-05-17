import axios from 'axios';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';


function Review() {

    const reduxStore = useSelector(store => store);
    const history = useHistory();
    
    let feeling = reduxStore.feelingsReducer;
    let understanding = reduxStore.understandingReducer;
    let supported = reduxStore.supportReducer;
    let comment = reduxStore.commentsReducer;

    const handleSubmit = () => {
        // push to home page
        let finalReview = {

        }
        axios.post('/submit')
        history.push('/Success');
    } // end handleSubmit

    return (
        <form onSubmit={handleSubmit}>
            <h3>Review</h3>
            <p>Feeling: {reduxStore.feelingsReducer}</p>
            <p>Understanding: {reduxStore.understandingReducer}</p>
            <p>Supported: {reduxStore.supportReducer}</p>
            <p>Comment: {reduxStore.commentsReducer}</p>
            <button type="submit">Submit Review</button>
        </form>
    )
}

export default Review;

