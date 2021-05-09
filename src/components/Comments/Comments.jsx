import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useState} from 'react';



function Comments() {
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {

    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <h3>Comments</h3>
                <input required type="text" placeholder="write comments here" name="Comments" onChange={(event) => setComment(event.target.value)}/>
                <button type="submit">Next</button>
            </form>

        </div>
    )
}

export default Comments;