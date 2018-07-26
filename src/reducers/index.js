import { combineReducers } from 'redux';
import ResultatReducer from './ResultatReducer';
import ElevReducer from './ElevReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers ( {
    prov: ResultatReducer,
    elev: ElevReducer,
    selectedResultID: SelectionReducer 
}); 
