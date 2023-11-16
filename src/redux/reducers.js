const initialState ={
    step: 1,
    answers:{}
};

const questionnaireReducer = (state = initialState, action) => {
   switch(action.type){
    case 'UPDATE_ANSWER':
        return {
            ...state,
            answers: {
                ...state.answers,
                [action.payload.step]: {
                    ...state.answers[action.payload.step],
                    [action.payload.field]: action.payload.value,
                },
            },
        };
    case 'NEXT_STEP':
        return {
            ...state,
            step: state.step +1,
        };

    case 'PREV_STEP':
        return {
            ...state,
            step: state.step -1,
        };

    case 'SUBMIT_DATA':
        return state;
    default:
        return state;
   }
};

export default questionnaireReducer;