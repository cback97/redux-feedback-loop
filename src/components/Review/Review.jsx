import {useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom';


function Review() {

    return (
        <div>

            <form>
                <h3>Feelings Review</h3>
                <input type="number" />
                <button type="submit">Next</button>
            </form>

        </div>
    )
}

export default Review;

