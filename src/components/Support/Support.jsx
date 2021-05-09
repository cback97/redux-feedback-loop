import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useState} from 'react';

function Support() {

    const [support, setSupport] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        dispatch({
            type: 'SUBMIT_SUPPORT', payload: {
                support: support
            }
        })
        setSupport('');
          // push to Comments page
          history.push('/Comments');
    } // end handleSubmit

    return (
        <>

            <form onSubmit={handleSubmit}>
                <h3>Rate Level of Support</h3>
                <h4>Rate From: 1-5</h4>
                <input required type="number" min="1" max="5" name="Support" value={support} onChange={(event) => setSupport(event.target.value)}/>
                <button type="submit">Next</button>
            </form>

        </>
    )
}

export default Support;