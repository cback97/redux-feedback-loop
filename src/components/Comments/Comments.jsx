import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';



function Comments() {
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();


    const handleSubmit = (event) => {
        dispatch({
            type: 'SUBMIT_COMMENT', payload: comment
        })

        // push to Review page
        history.push('/Review');
    } // end handleSubmit

    return (
        <>

            <form onSubmit={handleSubmit}>
                <h3>Comments</h3>
                <h4>Write Comment (Optional)</h4>
                <input type="text" placeholder="write comments here" name="Comments" value={comment} onChange={(event) => setComment(event.target.value)} />
                <button type="submit">Next</button>
            </form>

        </>
    )
}

export default Comments;