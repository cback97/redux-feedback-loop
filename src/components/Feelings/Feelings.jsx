import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import './Feelings.css'

function Feelings() {

    const [feelings, setFeelings] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        dispatch({
            type: 'SUBMIT_FEELING', payload: {
                feeling: feelings

            }

        })
        setFeelings('');
    } // end handleSubmit

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <h3>Rate Feelings</h3>
                <h4>Rate From: 1-5</h4>
                <input className="feelingsInput" required type="number" min="1" max="5" name="Feelings" value={feelings} onChange={(event) => setFeelings(event.target.value)} />
                <button type="submit">Next</button>
            </form>

        </div>

    )
}

export default Feelings;