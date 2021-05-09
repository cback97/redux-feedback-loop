import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';



function Comments() {
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();


    const handleSubmit = (event) => {
        dispatch({
            type: 'SUBMIT_COMMENT', payload: {
                comment: comment
            }
        })
        setComment('');
    } // end handleSubmit

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <h3>Comments</h3>
                <h4>Write Comment (Optional)</h4>
                <input type="text" placeholder="write comments here" name="Comments" value={comment} onChange={(event) => setComment(event.target.value)} />
                <button type="submit">Next</button>
            </form>

        </div>
    )
}

export default Comments;