import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';


function Review() {

    const reduxStore = useSelector(store => store);
    const history = useHistory();
    
    let feeling = reduxStore.feelingsReducer;
    let understanding = reduxStore.understandingReducer;
    let supported = reduxStore.supportReducer;
    let comment = reduxStore.commentsReducer;

    const handleSubmit = () => {
        event.preventDefault();
        // push to home page
        let finalReview = {
            feeling: feeling,
            understanding: understanding,
            support: supported,
            comment: comment
        }

        axios.post('/submit', finalReview)
        .then((response) => {
            console.log('Feedback successfully submitted', response);
            history.push('/Success');
        })
        .catch((err) => {
            alert('Error, review could not be submitted')
            console.log('Error, review could not be submitted', err);
        })
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

