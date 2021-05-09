import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Understanding() {

    return (
        <div>

            <form>
                <h3>Rate Level of Understanding</h3>
                <input type="number" min="0" max="5" placeholder="Rate From: 1-5" name="Understanding" required/>
                <button type="submit">Next</button>
            </form>

        </div>
    )
}

export default Understanding;