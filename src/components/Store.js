import { combineReducers, createStore } from 'redux';
import { Results } from './Reducers/Results';
import { Suggestions } from './Reducers/Suggestions';
import { CurrentItem } from './Reducers/CurrentItem';

const reducer = combineReducers({
    /*Results,
    Suggestions,
    CurrentItem*/
})

const Store = createStore(reducer)

export default Store