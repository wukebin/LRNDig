import { combineReducers } from 'redux';
import ProvReducer from './ProvReducer';
import ElevReducer from './ElevReducer';
export default combineReducers ( {
    prov: ProvReducer,
    elev: ElevReducer
}); 
