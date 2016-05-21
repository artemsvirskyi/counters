import { combineReducers } from 'redux';

const createCounterReducer = (actionType) => {
	return (state = 0, action) => {
		if(action.type === actionType){
			return ++state;
		}

		return state;
	};
};

const counter1 = createCounterReducer('COUNTER1_INCREMENT');
const counter2 = createCounterReducer('COUNTER2_INCREMENT');

export default combineReducers({
	counter1,
	counter2
});