import {createStore} from 'redux';
import questionnaireReducer from "./reducers";

const store = createStore(questionnaireReducer);

export default store;