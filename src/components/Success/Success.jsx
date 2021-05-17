import { useHistory } from 'react-router-dom';



function Success() {
    // Setting temp stat to hold input value as string

    const history = useHistory();

    const handleSubmit = () => {
    
        // push to Understanding page
        history.push('/Understanding');
    } // end handleSubmit

    return (

        <>
            <form onSubmit={handleSubmit}>
                <h2>Your feedback has been successfully submitted</h2>
                <h4>Please click the button below to go back to the home page</h4>
                <button type="submit">complete</button>
            </form>

        </>
    )
}

export default Success;