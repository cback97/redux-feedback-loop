import {useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom';


function Review() {

   const reduxStore = useSelector(store => store);

    const handleSubmit = () => {
  // push to Review page
  history.push('/Review');
    } // end handleSubmit

    return (
        <form>
                <h3>Review</h3>
                <p>{reduxStore.feelingsReducer}</p>
                <p>{reduxStore.understandingReducer}</p>
                <p>{reduxStore.supportReducer}</p>
                <p>{reduxStore.commentsReducer}</p>
                <button type="submit">Submit Review</button>
        </form>
    )
}

export default Review;

