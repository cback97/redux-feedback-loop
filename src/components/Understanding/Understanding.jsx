import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useState} from 'react';


function Understanding() {

    const [understanding, setUnderstanding] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();


    const handleSubmit = (event) => {
        dispatch({
            type: 'SUBMIT_UNDERSTANDING', payload: 
                 understanding

            

        })
        
         // push to Support page
         history.push('/Support');
    } // end handleSubmit

    return (
        <>

            <form onSubmit={handleSubmit}>
                <h3>Rate Level of Understanding</h3>
                <h4>Rate From: 1-5</h4>
                <input required type="number" min="1" max="5" name="Understanding" value={understanding} onChange={(event) => setUnderstanding(event.target.value)}/>
                <button type="submit">Next</button>
            </form>

        </>
    )
}

export default Understanding;