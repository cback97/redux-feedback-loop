import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Feelings() {

    return (
        <div>

            <form>
                <h3>Rate Level of Feelings</h3>
                <input type="number" name="Feelings" placeholder="Rate From: 1-5"/>
                <button type="submit">Next</button>
            </form>

        </div>
    )
}

export default Feelings;