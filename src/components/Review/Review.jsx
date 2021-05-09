import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';


function Review() {

    const reduxStore = useSelector(store => store);
    const history = useHistory();

    const handleSubmit = () => {
        // push to home page
        history.push('/');
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

