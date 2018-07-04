import { combineReducers } from 'redux';
import ResultatReducer from './ResultatReducer';
import ElevReducer from './ElevReducer';
export default combineReducers ( {
    prov: ResultatReducer,
    elev: ElevReducer
}); 
