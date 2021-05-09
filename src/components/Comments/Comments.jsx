import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';



function Comments() {

    return (
        <div>

            <form>
                <h3>Comments</h3>
                <input type="text" placeholder="write comments here" name="Comments" required/>
                <button type="submit">Next</button>
            </form>

        </div>
    )
}

export default Comments;