import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Understanding() {

    return (
        <div>

            <form>
                <h3>Rate Level of Understanding</h3>
                <input type="number" name="Understanding" placeholder="Rate From: 1-5"/>
                <button type="submit">Next</button>
            </form>

        </div>
    )
}

export default Understanding;