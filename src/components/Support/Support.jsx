import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Support() {

    return (
        <div>

            <form>
                <h3>Rate Level of Support</h3>
                <input type="number" name="Support" placeholder="Rate From: 1-5"/>
                <button type="submit">Next</button>
            </form>

        </div>
    )
}

export default Support;