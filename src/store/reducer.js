import { combineReducers } from 'redux';
import { reducer as registerReducer } from '../components/store';
import { reducer as flashReducer } from '../components/store';
import { reducer as loginReducer } from '../components/store';

// 组合所有的 reducer
export default combineReducers({
    register: registerReducer,
    flash: flashReducer,
    login: loginReducer
});
