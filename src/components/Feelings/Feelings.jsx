import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import './Feelings.css'

function Feelings() {
    // Setting temp stat to hold input value as string
    const [feelings, setFeelings] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        dispatch({
            type: 'SUBMIT_FEELING', payload: feelings
        })
        // push to Understanding page
        history.push('/Understanding');
    } // end handleSubmit

    return (

        <>
            <form onSubmit={handleSubmit}>
                <h3>Rate Feelings</h3>
                <h4>Rate From: 1-5</h4>
                <input className="feelingsInput" required type="number" min="1" max="5" name="Feelings" value={feelings} onChange={(event) => setFeelings(event.target.value)} />
                <button type="submit">Next</button>
            </form>

        </>

    )
}

export default Feelings;