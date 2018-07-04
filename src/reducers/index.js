import { combineReducers } from 'redux';
<<<<<<< HEAD
import ResultatReducer from './ResultatReducer';
export default combineReducers ( {
    prov: ResultatReducer //Prov = Libraries

=======
import ProvReducer from './ProvReducer';
import ElevReducer from './ElevReducer';
export default combineReducers ( {
    prov: ProvReducer,
    elev: ElevReducer
>>>>>>> cb6eb0a645b7a2b1ff7b2c487b6ab8ee55857d2c
}); 
