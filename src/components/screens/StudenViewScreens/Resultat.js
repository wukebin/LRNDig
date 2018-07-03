import {FlatList} from 'react-native';
import {connect } from 'react-redux';
import ResultatItem from './ResultatItem';


class Resultat extends Component {
    renderItem(prov) {

        
    }
    render() {
        
        return(
            <FlatList 
            data = {this.props.prov}
            renderItem = {this.renderItem}
            keyExtractor = {prov => prov.id}
            />
        )
    }
}

const mapStateToProps = state => {

    return {
        prov: state.prov
    };

};

export default connect(mapStateToProps)(Resultat);