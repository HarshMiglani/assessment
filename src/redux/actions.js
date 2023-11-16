// import axios from 'axios';


export const updateAnswer = (step , field , value) => ({
    type: 'UPDATE_ANSWER',
    payload: {step, field , value},
});

export const nextStep = () => ({
    type: 'NEXT_STEP',
});

export const prevStep = () => ({
    type: 'PREV_STEP',
});

export const submitData = (data) => {
    return (dispatch) => {
        // axios.post('http://localhost:3001/submit-data', data)
        // .then((response) => {
        //     console.log('server response', response.data)
        // dispatch({
        //     type: 'SUBMIT_DATA',
        //     payload: data,
        // });
        // })
        // .catch((error) => {
        //     console.error("Error submitting data" , error);
        // });
    };
};

