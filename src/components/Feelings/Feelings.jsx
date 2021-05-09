import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useState} from 'react';

function Feelings() {
    const [feelings, setFeelings] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {

    }


    return (

        <div>

            <form onSubmit={handleSubmit}>
                <h3>Rate Level of Feelings</h3>
                <input required type="number" min="1" max="5" placeholder="Rate From: 1-5" name="Feelings"  onChange={(event) => setFeelings(event.target.value)}/>
                <button type="submit">Next</button>
            </form>

        </div>
    )
}

export default Feelings;